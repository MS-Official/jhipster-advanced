
# JHipster Platform Starter Pack Specification

## 1. Purpose
This starter pack standardizes a JHipster-based platform with:
- monolith, gateway, and microservice modes
- Angular frontend
- Keycloak
- Consul
- Docker and Kubernetes
- email and phone OTP through Spring Boot
- monitoring
- developer-owned automation using Jenkins, n8n, and JMeter

## 2. Folder-by-folder responsibilities

| Folder | Responsibility |
|---|---|
| `jdl/apps/` | Application declarations for monolith, gateway, and microservices. |
| `jdl/domains/` | Domain entities, relationships, enums, and per-bounded-context options. |
| `jdl/environments/` | Import bundles that compose domains and apps into deployable targets. |
| `jdl/templates/` | Reusable JDL snippets and modeling patterns. |
| `jdl/scripts/` | Validation and controlled import commands. |
| `automation/jenkins/` | Jenkinsfiles, shared pipeline steps, and CasC config. |
| `automation/n8n/workflows/` | Workflow catalog for smoke tests, regression, resets, and release checks. |
| `automation/jmeter/` | API, load, stress, and regression test plans. |
| `infra/docker/compose/` | Local all-in-one stack for developers and CI smoke runs. |
| `infra/kubernetes/base/` | Common K8s manifests used across environments. |
| `infra/kubernetes/overlays/*` | Per-environment overlays for dev, SIT, UAT, and prod. |
| `infra/keycloak/` | Realm exports, client configs, and theme placeholders. |
| `infra/consul/config/` | Shared Consul config keys and sample bootstrap values. |
| `shared-libraries/` | Spring Boot shared starters and reusable modules. |
| `platform-bom/` | Maven BOM and Gradle version catalog definitions. |
| `schemas/` | JSON schemas and SQL artifacts, including the OTP schema. |

## 3. Exact JDL file set
### App files
- `jdl/apps/monolith-app.jdl`
- `jdl/apps/gateway-app.jdl`
- `jdl/apps/identity-service-app.jdl`
- `jdl/apps/notification-service-app.jdl`
- `jdl/apps/admin-service-app.jdl`

### Domain files
- `jdl/domains/00-shared-enums.jdl`
- `jdl/domains/01-tenant-user.jdl`
- `jdl/domains/02-otp-auth.jdl`
- `jdl/domains/03-notification.jdl`
- `jdl/domains/04-audit-monitoring.jdl`
- `jdl/domains/05-master-data.jdl`
- `jdl/domains/06-business-domain-template.jdl`

### Environment bundles
- `jdl/environments/monolith-import.jdl`
- `jdl/environments/microservice-import.jdl`
- `jdl/environments/full-platform-import.jdl`

## 4. Starter Maven and Gradle module map

### Maven
- `platform-bom/maven/pom.xml` — root BOM for versions
- `shared-libraries/starter-security/pom.xml`
- `shared-libraries/starter-otp/pom.xml`
- `shared-libraries/starter-notification/pom.xml`
- `shared-libraries/starter-observability/pom.xml`
- `shared-libraries/starter-multitenancy/pom.xml`
- `shared-libraries/starter-audit/pom.xml`

### Gradle
- `platform-bom/gradle/libs.versions.toml`
- `platform-bom/gradle/settings.gradle.kts`
- per-module `build.gradle.kts` files mirroring the Maven layout

## 5. OTP schema
The platform stores OTP metadata, never clear-text OTP values.

### Core tables
- `otp_policy`
- `otp_request`
- `otp_attempt`
- `verified_action`

### Rules
- hash OTP before persistence
- enforce TTL, resend cooldown, and max attempts
- record channel, purpose, tenant, user, and audit metadata
- support mock, email, and SMS delivery adapters

## 6. Docker/Kubernetes manifest matrix

| Area | Docker Compose | Kubernetes base | Overlays |
|---|---|---|---|
| App runtime | `core.yml`, `monolith.yml`, `microservices.yml` | Deployment, Service, ConfigMap, Secret | dev, sit, uat, prod |
| Identity | `keycloak.yml` | Deployment, Service, Secret | dev, sit, uat, prod |
| Config/discovery | `consul.yml` | Deployment, Service, ConfigMap | dev, sit, uat, prod |
| Databases | `postgres.yml`, `mysql.yml`, `mongodb.yml` | StatefulSet/Deployment, PVC, Service | dev, sit, uat, prod |
| Monitoring | `monitoring.yml` | Prometheus, Grafana, Loki, OTEL | dev, sit, uat, prod |
| Dev mail/sms | `mailpit.yml`, `sms-mock.yml` | optional dev-only Deployment and Service | dev only |
| Tooling | `jenkins.yml`, `n8n.yml`, `jmeter-runner.yml` | Jenkins Deployment, n8n Deployment, JMeter Job/CronJob | dev, sit, uat |

## 7. Developer automation pack

### Jenkins pipeline design
Stages:
1. Validate JDL
2. Import JDL with `--json-only`
3. Build shared libraries
4. Generate/update target apps
5. Run unit tests
6. Run integration tests
7. Run Cypress
8. Run JMeter smoke/perf suites
9. Build/push images
10. Deploy to target environment
11. Run n8n synthetic checks
12. Publish reports and quality gate result

### n8n workflow catalog
- nightly-smoke
- otp-e2e
- user-onboarding
- data-reset
- release-verification

### JMeter test suite map
- login-auth
- token-refresh
- otp-request
- otp-verify
- gateway-routing
- basic-crud
- admin-audit-read
- soak and concurrency variants

### Local compose stack
- keycloak
- consul
- postgres
- mailpit
- sms-mock
- jenkins
- n8n
- jmeter-runner
- grafana
- prometheus
- loki
- otel-collector
- monolith or gateway + services

### CI quality gates
- JDL validation passes
- no unexpected `.jhipster` diff
- unit test threshold met
- integration and e2e green
- JMeter smoke passes
- image build succeeds
- SAST/SCA baseline passes
- synthetic n8n checks pass

### Release checklist
- changelog updated
- BOM/version catalog updated
- JDL bundles versioned
- Liquibase reviewed
- package tarball reviewed with `npm pack --dry-run`
- npm access/public settings confirmed
- release tag created
- rollback version identified

## 8. Packaging as an npm all-in-one package
Package this repo as a public scoped package containing documentation, templates, and blueprint code. Add the keywords `yeoman-generator` and `jhipster-blueprint` once the actual blueprint implementation is in place.

## 9. Build sequence from zero
1. Create the repo structure.
2. Add the JDL files and validation scripts.
3. Create the BOM/version catalog.
4. Implement shared Spring libraries.
5. Add the JHipster blueprint package.
6. Add Docker Compose templates.
7. Add Kubernetes base and overlays.
8. Add Jenkins, n8n, and JMeter automation assets.
9. Run validation and dry-run packaging.
10. Publish to npm as a public scoped package.

## 10. Recommended first deliverables
- v0.1: documentation + JDL + infra + automation templates
- v0.2: blueprint shell and shared libraries
- v0.3: generated sample monolith and gateway
- v1.0: production-ready blueprint and CI/CD workflows

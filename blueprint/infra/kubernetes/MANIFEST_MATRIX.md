# Docker / Kubernetes manifest matrix

| Component | Docker Compose | K8s Base | Dev Overlay | SIT/UAT Overlay | Prod Overlay |
|---|---|---|---|---|---|
| monolith-app | yes | yes | yes | yes | yes |
| gateway-app | yes | yes | yes | yes | yes |
| identity-service | yes | yes | yes | yes | yes |
| notification-service | yes | yes | yes | yes | yes |
| admin-service | yes | yes | yes | yes | yes |
| postgres | yes | yes | yes | yes | yes |
| keycloak | yes | yes | yes | yes | yes |
| consul | yes | yes | yes | yes | yes |
| mailpit | yes | optional | yes | no | no |
| n8n | yes | yes | yes | yes | optional |
| jenkins | yes | yes | optional | optional | optional |
| prometheus | yes | yes | yes | yes | yes |
| grafana | yes | yes | yes | yes | yes |
| jmeter-runner | ad hoc | job | yes | yes | yes |

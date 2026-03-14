# Starter pack specification

## Folder-by-folder responsibilities
- `cli/` wrapper entrypoint for local execution
- `generators/` JHipster blueprint sub-generators
- `templates/` reserved for future package-level templates
- `automation/` Jenkins, n8n, JMeter, release gates
- `infra/` Docker Compose and Kubernetes assets
- `jdl/` source-of-truth JDL contracts
- `shared-libraries/` reusable Spring starter skeletons
- `schemas/` SQL fallback and reviewable schema assets
- `platform-bom/` shared Maven BOM and Gradle catalog

## Exact JDL files
See `jdl/apps/*` and `jdl/domains/*`.

## OTP schema
See `schemas/otp-schema.sql`.

## Build package path
See `BUILD_FROM_SCRATCH.md`.

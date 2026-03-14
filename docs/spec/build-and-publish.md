
# Build and Publish Guide

## Prerequisites
- Node.js 22+
- npm 10+
- Java 21+
- Docker / Docker Compose
- Kubernetes CLI tooling for validation
- JHipster generator installed locally for testing

## Package strategy
Publish this as a public scoped npm package, for example:
`@your-org/generator-jhipster-platform-starter`

## Step-by-step
1. Rename the scope and repository URLs in `package.json`.
2. Implement the blueprint code under `blueprint/`.
3. Add any generated templates under `blueprint/generators/**/templates`.
4. Verify package contents:
   - `npm pack --dry-run`
5. Log in to npm:
   - `npm login`
6. Publish the initial scoped package:
   - `npm publish --access public`
7. For later releases:
   - update version
   - `npm publish`

## Suggested npm scripts
- `validate:jdl`
- `pack:check`
- `lint`
- `test`
- `release:dry-run`

## Safe publish checklist
- no secrets
- no `.env` files
- no large binaries
- no build caches
- `files` whitelist in `package.json`
- LICENSE included
- README included

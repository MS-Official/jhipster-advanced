# generator-jhipster-my-jhipster

A publishable **JHipster blueprint package** that combines:

- JHipster app generation
- platform conventions
- OTP support scaffolding
- Jenkins / n8n / JMeter automation packs
- Docker Compose and Kubernetes starter assets
- shared Spring library skeletons
- JDL starter templates

## What this package is now

This package is the **next build step** after the starter specification:
- it is structured as a real npm package
- it contains blueprint sub-generators
- it includes templates and automation assets
- it is designed to be published to npm

It is still a **scaffold**. The generator hooks are intentionally conservative and mostly:
- validate blueprint usage
- add platform metadata/options
- copy starter assets
- document where to extend JHipster priorities further

## Blueprint name

Install and use it through its blueprint name:

```bash
jhipster --blueprints my-jhipster
```

## Local development quick start

```bash
npm install
npm run doctor
npm run pack:check
```

## Typical usage

```bash
npx -p generator-jhipster -p generator-jhipster-my-jhipster jhipster --blueprints my-jhipster
```

## Included sub-generators

- `app`
- `server`
- `entity`
- `angular`
- `docker`
- `kubernetes`

## Publish

See [BUILD_FROM_SCRATCH.md](./BUILD_FROM_SCRATCH.md).

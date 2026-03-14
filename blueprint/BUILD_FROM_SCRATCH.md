# Build from scratch and publish as an all-in-one npm package

## 1. Create the repository

```bash
mkdir generator-jhipster-platform-starter
cd generator-jhipster-platform-starter
git init
npm init -y
```

## 2. Set the npm package identity

Edit `package.json`:
- set the package name to `@your-org/generator-jhipster-platform-starter`
- keep `"type": "module"`
- keep `"publishConfig": { "access": "public" }`
- make sure the package has both keywords:
  - `yeoman-generator`
  - `jhipster-blueprint`

## 3. Install dependencies

```bash
npm install chalk execa generator-jhipster
npm install -D eslint
```

## 4. Add blueprint files

Copy these folders into the repo:
- `cli/`
- `generators/`
- `templates/`
- `automation/`
- `infra/`
- `jdl/`
- `shared-libraries/`
- `schemas/`
- `docs/`

## 5. Verify package contents

```bash
npm pack --dry-run
```

Confirm no secrets, local files, or oversized binaries are included.

## 6. Test the package locally

```bash
npm link
mkdir ../tmp-jh
cd ../tmp-jh
jhipster-platform-starter
```

Or run:

```bash
npx -p generator-jhipster -p ../generator-jhipster-platform-starter jhipster --blueprints platform-starter
```

## 7. Publish to npm

### Login
```bash
npm login
```

### Initial publish of a scoped package
```bash
npm publish --access public
```

### Later releases
```bash
npm version patch
npm publish
```

## 8. Recommended secure publish path

Prefer GitHub Actions trusted publishing with npm OIDC once the package is stable.
That lets you publish from CI without long-lived npm write tokens.

## 9. Suggested semantic versioning

- `0.x` while generator hooks are stabilizing
- `1.0.0` after at least:
  - app generator
  - entity generator
  - docker assets
  - kubernetes assets
  - shared-library BOM
  - OTP templates
  - CI pack

## 10. Release flow

```bash
npm test
npm run pack:check
npm version minor
git push --follow-tags
npm publish
```

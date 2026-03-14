# Release checklist

## Before tagging
- [ ] JDL import passes with `--json-only`
- [ ] generated diff reviewed
- [ ] Liquibase or SQL impact reviewed
- [ ] unit and integration tests green
- [ ] OTP smoke and verify flows green
- [ ] Docker local stack green
- [ ] JMeter baselines green
- [ ] n8n synthetic workflows green

## Before publishing npm package
- [ ] package name verified
- [ ] `npm pack --dry-run`
- [ ] no secrets in package
- [ ] README updated
- [ ] changelog prepared
- [ ] version bumped

## Before production release
- [ ] container images built
- [ ] manifests reviewed
- [ ] rollback plan ready

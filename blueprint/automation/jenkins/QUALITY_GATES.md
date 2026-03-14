# CI quality gates

A pull request should fail if any of these fail:
1. JDL validation
2. Unit tests
3. Integration tests
4. OTP smoke test
5. Cypress smoke test
6. JMeter baseline thresholds
7. Dependency vulnerability policy
8. Container image build

## Suggested thresholds
- unit + integration pass rate: 100%
- code coverage floor: 80% lines
- P95 login latency baseline: team-defined
- P95 OTP verify latency baseline: team-defined
- no critical dependency issues

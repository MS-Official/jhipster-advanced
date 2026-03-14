import chalk from 'chalk';

export function assertBlueprintContext(generator, label = 'platform-starter') {
  if (generator.options.help) return;
  if (!generator.options.jhipsterContext) {
    throw new Error(
      `This is a JHipster blueprint and should be used only like ${chalk.yellow(`jhipster --blueprints ${label}`)}`
    );
  }
}

export function normalizePlatformOptions(config = {}) {
  return {
    enableOtp: config.enableOtp ?? true,
    enableJenkinsPack: config.enableJenkinsPack ?? true,
    enableN8nPack: config.enableN8nPack ?? true,
    enableJMeterPack: config.enableJMeterPack ?? true,
    enableObservabilityPack: config.enableObservabilityPack ?? true,
    enableConsul: config.enableConsul ?? true,
    enableKeycloak: config.enableKeycloak ?? true
  };
}

import chalk from 'chalk';

export function assertBlueprintContext(generator, label = 'my-jhipster') {
  if (generator.options.help) return;

  const blueprintNames = [
    generator.options.blueprints,
    generator.options.fromBlueprint,
    generator.options.blueprint
  ]
    .flat()
    .filter(Boolean)
    .map(value => String(value));

  if (blueprintNames.length > 0 && !blueprintNames.some(value => value.includes(label))) {
    generator.log?.(
      chalk.yellow(
        `Expected blueprint ${label}, but received: ${blueprintNames.join(', ')}. Continuing because JHipster may vary the composed options.`
      )
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

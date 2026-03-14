import AppGenerator from 'generator-jhipster/generators/app';
import chalk from 'chalk';
import { assertBlueprintContext, normalizePlatformOptions } from '../common/base-blueprint.js';

export default class extends AppGenerator {
  constructor(args, options, features) {
    super(args, options, features);
    assertBlueprintContext(this);
    this.platformStarter = normalizePlatformOptions(this.config.get('platformStarter'));
  }

  get prompting() {
    return {
      ...(super.prompting ?? {}),
      async platformStarterPrompts() {
        const answers = await this.prompt([
          {
            type: 'confirm',
            name: 'enableOtp',
            message: 'Include OTP scaffolding?',
            default: this.platformStarter.enableOtp
          },
          {
            type: 'confirm',
            name: 'enableJenkinsPack',
            message: 'Copy Jenkins automation pack?',
            default: this.platformStarter.enableJenkinsPack
          },
          {
            type: 'confirm',
            name: 'enableN8nPack',
            message: 'Copy n8n workflow pack?',
            default: this.platformStarter.enableN8nPack
          },
          {
            type: 'confirm',
            name: 'enableJMeterPack',
            message: 'Copy JMeter suite pack?',
            default: this.platformStarter.enableJMeterPack
          }
        ]);
        this.platformStarter = normalizePlatformOptions(answers);
        this.config.set('platformStarter', this.platformStarter);
      }
    };
  }

  get [AppGenerator.PROMPTING]() {
    return this.prompting;
  }

  get writing() {
    return {
      ...(super.writing ?? {}),
      writePlatformStarterMetadata() {
        this.fs.copyTpl(
          this.templatePath('platform-starter/platform-starter.json.ejs'),
          this.destinationPath('.platform-starter.json'),
          {
            timestamp: new Date().toISOString(),
            options: this.platformStarter,
            applicationType: this.jhipsterConfig.applicationType,
            packageName: this.jhipsterConfig.packageName
          }
        );
      },
      copyAutomationDocs() {
        this.fs.copy(
          this.templatePath('platform-starter/docs'),
          this.destinationPath('platform-starter/docs')
        );
      }
    };
  }

  get [AppGenerator.WRITING]() {
    return this.writing;
  }

  get end() {
    return {
      ...(super.end ?? {}),
      postMessage() {
        this.log(chalk.green('\nplatform-starter scaffold copied.'));
        this.log(chalk.yellow('Next: wire shared Spring starters, Docker profiles, and CI packs into your generated app.'));
      }
    };
  }

  get [AppGenerator.END]() {
    return this.end;
  }
}

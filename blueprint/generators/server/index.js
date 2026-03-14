import ServerGenerator from 'generator-jhipster/generators/server';
import { assertBlueprintContext } from '../common/base-blueprint.js';

export default class extends ServerGenerator {
  constructor(args, options, features) {
    super(args, options, features);
    assertBlueprintContext(this);
  }

  get writing() {
    return {
      ...(super.writing ?? {}),
      copyServerPlatformFiles() {
        this.fs.copy(
          this.templatePath('server/src'),
          this.destinationPath('src')
        );
      },
      appendPomHints() {
        this.fs.copy(
          this.templatePath('server/platform-starter-server.md'),
          this.destinationPath('platform-starter/server/README.md')
        );
      }
    };
  }

  get [ServerGenerator.WRITING]() {
    return this.writing;
  }
}

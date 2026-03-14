import DockerGenerator from 'generator-jhipster/generators/docker';
import { assertBlueprintContext } from '../common/base-blueprint.js';

export default class extends DockerGenerator {
  constructor(args, options, features) {
    super(args, options, features);
    assertBlueprintContext(this);
  }

  get writing() {
    return {
      ...(super.writing ?? {}),
      copyComposeProfiles() {
        this.fs.copy(
          this.templatePath('docker/compose'),
          this.destinationPath('src/main/docker/platform-starter')
        );
      }
    };
  }

  get [DockerGenerator.WRITING]() {
    return this.writing;
  }
}

import EntityGenerator from 'generator-jhipster/generators/entity';
import { assertBlueprintContext } from '../common/base-blueprint.js';

export default class extends EntityGenerator {
  constructor(args, options, features) {
    super(args, options, features);
    assertBlueprintContext(this);
  }

  get writing() {
    return {
      ...(super.writing ?? {}),
      copyEntityConventions() {
        this.fs.copy(
          this.templatePath('entity/platform-starter-entity.md'),
          this.destinationPath('platform-starter/entity/README.md')
        );
      }
    };
  }

  get [EntityGenerator.WRITING]() {
    return this.writing;
  }
}

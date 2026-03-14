import AngularGenerator from 'generator-jhipster/generators/angular';
import { assertBlueprintContext } from '../common/base-blueprint.js';

export default class extends AngularGenerator {
  constructor(args, options, features) {
    super(args, options, features);
    assertBlueprintContext(this);
  }

  get writing() {
    return {
      ...(super.writing ?? {}),
      copyAngularAssets() {
        this.fs.copy(
          this.templatePath('angular/src'),
          this.destinationPath('src')
        );
      }
    };
  }

  get [AngularGenerator.WRITING]() {
    return this.writing;
  }
}

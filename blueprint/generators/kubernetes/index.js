import KubernetesGenerator from 'generator-jhipster/generators/kubernetes';
import { assertBlueprintContext } from '../common/base-blueprint.js';

export default class extends KubernetesGenerator {
  constructor(args, options, features) {
    super(args, options, features);
    assertBlueprintContext(this);
  }

  get [KubernetesGenerator.WRITING]() {
    return {
      ...super._writing(),
      copyKubernetesAssets() {
        this.fs.copy(
          this.templatePath('kubernetes/base'),
          this.destinationPath('k8s/platform-starter/base')
        );
        this.fs.copy(
          this.templatePath('kubernetes/overlays'),
          this.destinationPath('k8s/platform-starter/overlays')
        );
      }
    };
  }
}

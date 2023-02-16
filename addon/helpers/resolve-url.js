import Helper from '@ember/component/helper';
import { inject as service } from '@ember/service';

export default class ResolveUrlHelper extends Helper {
  @service
  urls;

  compute ([alias, ...path]) {
    return this.urls.resolve (alias, path.join ('/'));
  }
}

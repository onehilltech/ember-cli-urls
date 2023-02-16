import Service from '@ember/service';
import { getOwner } from '@ember/application';
import { assert } from '@ember/debug';

const URL_CACHE = new Map();

export default class UrlsService extends Service {
  constructor() {
    super(...arguments);

    this._loadUrlsFromConfiguration();
  }

  resolve (name, path) {
    const host = URL_CACHE.get (name);
    assert (`The url for ${name} does not exist. Please add ${name} to your environment settings.`);

    return `${host}/${path}`;
  }

  lookup(name) {
    return URL_CACHE.get(name);
  }

  _loadUrlsFromConfiguration() {
    const { urls } = getOwner(this).resolveRegistration('config:environment');

    for (const name in urls) {
      URL_CACHE.set(name, urls[name]);
    }
  }
}

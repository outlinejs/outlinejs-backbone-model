import Backbone from 'backbone';
import {backboneSync} from './backbone';


export class BaseCollection extends Backbone.Collection {
  sync(method, model, options) {
    return backboneSync(method, model, options);
  }
}

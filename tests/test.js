import assert from 'assert';

import {backboneSync} from '../lib/backbone';
import {BaseModel} from '../lib/models';
import {BaseCollection} from '../lib/managers';


describe('Import lib resources', function () {
  it('backboneSync should be imported correctly', function () {
    assert(backboneSync);
  });

  it('BaseModel should be imported correctly', function () {
    assert(BaseModel);
  });

  it('BaseCollection should be imported correctly', function () {
    assert(BaseCollection);
  });
});
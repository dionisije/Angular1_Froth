'use strict';

describe('Service: albumFactory', function () {

  // load the service's module
  beforeEach(module('angular1FrothApp'));

  // instantiate service
  var albumFactory;
  beforeEach(inject(function (_albumFactory_) {
    albumFactory = _albumFactory_;
  }));

  it('should do something', function () {
    expect(!!albumFactory).toBe(true);
  });

});

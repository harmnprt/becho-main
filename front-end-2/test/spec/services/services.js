'use strict';

describe('Service: Services', function () {

  // load the service's module
  beforeEach(module('frontEnd2App'));

  // instantiate service
  var Services;
  beforeEach(inject(function (_Services_) {
    Services = _Services_;
  }));

  it('should do something', function () {
    expect(!!Services).toBe(true);
  });

});

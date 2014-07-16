'use strict';

describe('Directive: midleBody', function () {

  // load the directive's module
  beforeEach(module('frontEnd2App'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<midle-body></midle-body>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the midleBody directive');
  }));
});

'use strict';

describe('Controller: DiscographyCtrl', function () {

  // load the controller's module
  beforeEach(module('angular1FrothApp'));

  var DiscographyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DiscographyCtrl = $controller('DiscographyCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DiscographyCtrl.awesomeThings.length).toBe(3);
  });
});

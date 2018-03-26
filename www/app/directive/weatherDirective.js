(function () {

  'use strict';

  angular
    .module('app')
    .directive('weatherInfo', weatherInfo);

  function weatherInfo() {
    return {
      restrict: 'E',
      scope: {
        data: '='
      },
      templateUrl: 'app/template/wather.html',
    }
  }

})();
(function () {

  'use strict';

  angular
    .module('app')
    .controller('weatherController', WeatherController);

  WeatherController.$inject = ['weatherService'];


  function WeatherController(weatherService) {
    var vm = this;
    vm.data = {};

    vm.error = false;
    vm.loading = true;

    vm.onInit = function (city) {
      vm.data = {};
      vm.error = false;
      vm.loading = true;
      
      weatherService.getWeather(vm.onSuccess, vm.onError);
    };

    vm.onSuccess = function (success) {
      vm.data = success;
      vm.loading = false;
      console.log(success);
    };

    vm.onError = function (error) {
      vm.error = true;
      vm.loading = false;
    };

    vm.onInit();

  }

})();
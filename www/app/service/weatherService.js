(function () {

    'use strict';

    angular
        .module('app')
        .service('weatherService', WeatherService);

    function WeatherService($http, $q) {
        var vm = this;

        const defaultCoordinates = [37.8267, -122.4233];
        const apiKey = '165c936239799edc15997674dd444e95';
        const apiUrl = 'https://crossorigin.me/https://api.darksky.net/forecast/';

        vm.getWeather = function (onSuccess, onError) {
            var url = apiUrl + apiKey + '/';

            vm.getLocation().then(function (success) {
                url += success[0] + ',' + success[1];

                $http.get(url)
                     .success(onSuccess)
                     .error(onError);
            });
        };

        vm.getLocation = function () {
            var deferred = $q.defer();

            if (window.navigator.geolocation) {
                window.navigator.geolocation.getCurrentPosition(function (success) {
                    var coordinates = [success.coords.latitude, success.coords.longitude];
                    deferred.resolve(coordinates);
                }, function (err) {
                    console.log(err);
                    deferred.resolve(defaultCoordinates);
                });
            } else {
                deferred.resolve(defaultCoordinates);
            }

            return deferred.promise;
        }
    }

})();
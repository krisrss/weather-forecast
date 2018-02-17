(function(){
    "use strict";

    var getImage = function() {

        var weatherImg = function(weatherCode) {
            return "http://openweathermap.org/img/w/" + weatherCode + ".png"
        };

        return {
            weatherImg: weatherImg
        }
    };

    angular.module("WeatherApp").factory("getImage", getImage);
}());
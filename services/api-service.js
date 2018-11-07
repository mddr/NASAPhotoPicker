angular.module("NASAPhotoPicker")
    .service('apiService', ['$http', function ($http) {
        const apodUrl = "https://api.nasa.gov/planetary/apod?api_key={api_key}&count={count}";
        const apiKey = "46mPyxXbesbY4jgMCbtuhEOvSvxvatyS9SsOxS4d";

        this.getApods = function(count) {
            const url = apodUrl.replace("{api_key}", apiKey).replace("{count}", count);
            return $http.get(url);
        }

        this.getApod = function() {
            const url = apodUrl.replace("{api_key}", apiKey).replace("&count={count}", "");
            return $http.get(url);
        }

    }]);
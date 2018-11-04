angular.module("NASAPhotoPicker")
    .service('apiService', ['$http', function ($http) {
        const apodUrl = "https://api.nasa.gov/planetary/apod?api_key={api_key}&count={count}";
        const apiKey = "46mPyxXbesbY4jgMCbtuhEOvSvxvatyS9SsOxS4d";

        const test = "https://jsonplaceholder.typicode.com/todos/1";

        this.getApods = function(count) {
            const url = apodUrl.replace("{api_key}", apiKey).replace("{count}", count);
            // const url = test;
            return $http.get(url);
        }

    }]);
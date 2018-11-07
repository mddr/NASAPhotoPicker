angular.module("NASAPhotoPicker")
    .controller("photosController", ["$scope", 'apiService', function($scope, apiService) {
        $scope.loading = true;
        $scope.displayApod = true;
        $scope.apod;
        $scope.images = [];
        $scope.imagesCount;

        $scope.getApods = function() {
            $scope.displayApod = false;
            $scope.loading = true;
            apiService.getApods(this.imagesCount)
                .then(response => {
                    $scope.images = response.data;
                    $scope.loading = false;
                })
        };

        $scope.getApod = function() {
            apiService.getApod()
                .then(response => {
                    $scope.apod = response.data;
                    $scope.loading = false;
                })
        };
    }]);
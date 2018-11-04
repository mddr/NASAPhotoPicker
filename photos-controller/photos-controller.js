angular.module("NASAPhotoPicker")
    .controller("photosController", ["$scope", 'apiService', function($scope, apiService) {
        $scope.images = [];

        $scope.getApod = function() {
            apiService.getApods(12)
                .then(response => {
                    $scope.images = response.data;
                    console.log($scope.images);
                })
        }
    }]);
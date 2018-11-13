angular.module("NASAPhotoPicker")
    .controller("photosController", ["$scope", 'apiService', function($scope, apiService) {
        $scope.loading = true;
        $scope.formValid = false;
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

        $scope.validateInput = function() {
            if (typeof this.imagesCount == 'number' && this.imagesCount > 0 && this.imagesCount <= 30) {
                this.formValid = true;
            } else {
                this.formValid = false;
            }
        }

        $scope.addPost = function() {
            let post = {url:this.apod.url, text:"sample text", media_type:"video"};
            apiService.addPost(post);
            console.log(apiService.posts);
        }
    }]);
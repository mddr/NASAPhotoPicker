angular.module("NASAPhotoPicker")
    .controller("photosController", ["$scope", 'apiService', function($scope, apiService) {
        $scope.loading = true;
        $scope.formValid = false;
        $scope.displayApod = true;
        $scope.apod;
        $scope.images = [];
        $scope.imagesCount;
        $scope.postContent;
        $scope.modalImage;

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

        $scope.onModalClick = function() {
            let post = {
                url:$scope.modalImage.url, 
                text:$scope.postContent, 
                media_type:$scope.modalImage.media_type,
                title:$scope.modalImage.title
            };
            apiService.addPost(post);
            $scope.modalImage = null;
            $scope.postContent = null;
        }

        $scope.setModalImage = function(image) {
            $scope.modalImage = image;
        }

    }]);
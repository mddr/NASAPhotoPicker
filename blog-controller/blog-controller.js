angular.module("NASAPhotoPicker")
    .controller('blogController', ["$scope", 'apiService', function($scope, apiService) {
        $scope.postContent;
        $scope.modalImage;
        $scope.index;

        $scope.getPosts = function() {
            return apiService.posts;
        }

        $scope.removePost = function(index) {
            apiService.removePost(index);
        }

        $scope.openModal = function(post, index) {
            $scope.modalImage = post;
            $scope.postContent = post.text;
            $scope.index = index;
        }

        $scope.onModalClick = function() {
            let post = {
                url: $scope.modalImage.url, 
                text: $scope.postContent, 
                media_type: $scope.modalImage.media_type,
                title: $scope.modalImage.title
            };
            apiService.updatePost($scope.index, post);
        }

    }]);

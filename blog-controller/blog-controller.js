angular.module("NASAPhotoPicker")
    .controller('blogController', ["$scope", 'apiService', function($scope, apiService) {
        $scope.getPosts = function() {
            return apiService.posts;
        }

        $scope.removePost = function(index) {
            apiService.removePost(index);
        }

        $scope.editPost = function(post) {
            console.log(post);
        }
    }]);
angular.module("NASAPhotoPicker")
    .controller('blogController', ["$scope", 'ModalService', 'apiService', function($scope, apiService, ModalService) {
        $scope.getPosts = function() {
            return apiService.posts;
        }

        $scope.removePost = function(index) {
            apiService.removePost(index);
        }

        $scope.editPost = function(post) {
            console.log(post);
        }

		$scope.openModal = openModal;
        $scope.closeModal = closeModal;
        
        initController();

        function initController() {
            $scope.bodyText = 'This text can be updated in modal 1';
        }

        function openModal(id){
            ModalService.open(id);
        }

        function closeModal(id){
            ModalService.close(id);
        }
    }]);

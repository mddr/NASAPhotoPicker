angular.module("NASAPhotoPicker")
    .controller('blogController', ["$scope", 'ModalService', function($scope, ModalService) {
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
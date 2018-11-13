angular.module("NASAPhotoPicker").filter('trustThisUrl', ["$sce", function ($sce) {
    return function (val) {
        return $sce.trustAsResourceUrl(val);
    };
}]);
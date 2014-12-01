(function() {
    "use strict";

    angular
        .module("admin")
        .controller("AddPostController", AddPostController);

    AddPostController.$inject = ["$scope"];

    function AddPostController($scope) {
        $scope.published = true;

        $scope.submitted = false;

        $scope.submit = function($event) {
            $scope.submitted = true;

            if ($scope.form.$invalid) {
                $event.preventDefault();
                return;
            }

            $scope.form.submit();
        };
    }
}());
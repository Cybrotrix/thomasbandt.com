(function() {
    "use strict";

    angular
        .module("admin")
        .controller("EditPostController", EditPostController);

    EditPostController.$inject = ["$scope"];

    function EditPostController($scope) {
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
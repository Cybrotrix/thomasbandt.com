(function() {
    "use strict";

    angular
        .module("admin", [])
        .controller("AddPostController", AddPostController);

    AddPostController.$inject = ["$scope"];

    function AddPostController($scope) {
        $scope.post = {
            title: "",
            abstract: "",
            content: "",
            published: true
        }
    }
}());
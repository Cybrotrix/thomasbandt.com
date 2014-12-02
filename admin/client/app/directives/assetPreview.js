(function() {
    "use strict";

    angular
        .module("admin")
        .directive("assetPreview", assetPreview);

    var allowedExtensions =
    [
        "jpg",
        "jpeg",
        "gif",
        "png"
    ];

    function assetPreview() {
        return function(scope, element, attributes) {
            var extension = attributes.assetPreview
                .split('.')
                .pop()
                .toLowerCase();

            if (!_.contains(allowedExtensions, extension)) {
                $(element).hide();
            }
        };
    }
}());
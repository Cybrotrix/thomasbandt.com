(function(repository) {
    "use strict";

    var q = require("q");

    repository.save = function(post) {
        var deferred = q.defer();

        // TODO
        deferred.resolve(true);

        return deferred.promise;
    };
}(module.exports));

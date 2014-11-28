(function(repository) {
    "use strict";

    var q = require("q"),
        config = require("../../config");

    repository.getAdminUser = function() {
        var deferred = q.defer();

        deferred.resolve({
            userName: config.admin.credentials.userName,
            hashedPassword: config.admin.credentials.hashedPassword
        });

        return deferred.promise;
    };
}(module.exports));

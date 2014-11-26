(function(repository) {
    "use strict";

    var q = require("q");

    var _config = require("../config");

    repository.getAdminUser = function() {
        var deferred = q.defer();

        deferred.resolve({
            userName: _config.credentials.userName,
            hashedPassword: _config.credentials.hashedPassword
        });

        return deferred.promise;
    };
}(module.exports));

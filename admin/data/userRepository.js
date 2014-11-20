(function(repository) {
    "use strict";

    var _config = require("../config");
    var Q = require("q");

    repository.getAdminUser = function() {
        var deferred = Q.defer();

        deferred.resolve({
            userName: _config.credentials.userName,
            hashedPassword: _config.credentials.hashedPassword
        });

        return deferred.promise;
    }
}(module.exports));

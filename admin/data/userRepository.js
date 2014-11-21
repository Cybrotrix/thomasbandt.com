(function(repository) {
    "use strict";

    var q = require("q");
    var User = require("../model/user");

    var _config = require("../config");

    repository.getAdminUser = function() {
        var deferred = q.defer();

        deferred.resolve(new User(
            _config.credentials.userName,
            _config.credentials.hashedPassword
        ));

        return deferred.promise;
    };
}(module.exports));

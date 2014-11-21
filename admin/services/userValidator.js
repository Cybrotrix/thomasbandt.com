(function(module) {
    "use strict";

    var Q = require("q");
    var UserValidationResult = require("../model/userValidationResult");

    var _adminUser;

    module.init = function(adminUser) {
        _adminUser = adminUser;
    };

    module.validateLogin = function(userName, password) {
        var deferred = Q.defer();

        var result = new UserValidationResult();

        deferred.resolve(result);

        return deferred.promise;
    };
}(module.exports));

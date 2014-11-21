(function(module) {
    "use strict";

    var bcrypt = require("bcrypt");
    var Q = require("q");
    var UserValidationResult = require("../model/userValidationResult");

    var _adminUser;

    module.init = function(adminUser) {
        _adminUser = adminUser;
    };

    module.validateLogin = function(userName, password) {
        var deferred = Q.defer();

        bcrypt.compare(password, _adminUser.hashedPassword, function(error, passwordIsvalid) {
            var result = new UserValidationResult();

            if (!passwordIsvalid) {
                result.errorMessage = "The password is not correct.";
            } else if (userName !== _adminUser.userName) {
                result.errorMessage = "The user name is not correct.";
            }

            if (result.errorMessage === null) {
                result.user = _adminUser;
            }

            deferred.resolve(result);
        });

        return deferred.promise;
    };
}(module.exports));

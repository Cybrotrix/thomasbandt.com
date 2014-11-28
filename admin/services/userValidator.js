(function(module) {
    "use strict";

    var bcrypt = require("bcrypt"),
        data = require("../data"),
        q = require("q");

    module.validateLogin = function(userName, password) {
        var deferred = q.defer();

        data.users.getAdminUser().done(function(admin) {
            bcrypt.compare(password, admin.hashedPassword, function(error, passwordIsvalid) {
                var result = {};

                if (!passwordIsvalid) {
                    result.errorMessage = "The password is not correct.";
                } else if (userName !== admin.userName) {
                    result.errorMessage = "The user name is not correct.";
                }

                if (result.errorMessage === undefined) {
                    result.user = admin;
                }

                deferred.resolve(result);
            });
        }, deferred.reject);

        return deferred.promise;
    };
}(module.exports));

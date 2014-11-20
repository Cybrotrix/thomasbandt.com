(function(module) {
    "use strict";

    require("should");

    var Q = require("q");
    var UserValidationResult = require("../model/userValidationResult");

    var _adminUser;

    module.init = function(adminUser) {
        adminUser.should.be.ok;

        _adminUser = adminUser;
    };

    module.validateLogin = function(userName, password) {
        var deferred = Q.defer();

        userName.should.be.ok;
        password.should.be.ok;

        var result = new UserValidationResult();

        deferred.resolve(result);

        return deferred.promise;
    };
}(module.exports));

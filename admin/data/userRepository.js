(function(repository) {
    "use strict";

    var _config = require("../config");

    repository.getAdminUser = function() {
        return {
            userName: _config.credentials.userName,
            hashedPassword: _config.credentials.hashedPassword
        };
    }
}(module.exports));

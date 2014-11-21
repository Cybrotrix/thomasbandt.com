(function(admin) {
    "use strict";

    var _loginController = require("./controllers/loginController");

    admin.init = function(app) {
        _loginController.init(app);
    };

    admin.services = {
        userValidator: require("./services/userValidator")
    };
}(module.exports));

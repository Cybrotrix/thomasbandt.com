(function(admin) {
    "use strict";

    var loginController = require("./controllers/loginController");
    var logoutController = require("./controllers/logoutController");
    var overViewController = require("./controllers/overViewController");

    admin.init = function(app) {
        loginController.init(app);
        logoutController.init(app);
        overViewController.init(app);
    };

    admin.services = {
        userValidator: require("./services/userValidator")
    };
}(module.exports));

(function(controllers) {
    "use strict";

    var addPostController = require("./addPostController");
    var loginController = require("./loginController");
    var logoutController = require("./logoutController");
    var overViewController = require("./overViewController");

    controllers.init = function(app) {
        addPostController.init(app);
        loginController.init(app);
        logoutController.init(app);
        overViewController.init(app);
    };
}(module.exports));

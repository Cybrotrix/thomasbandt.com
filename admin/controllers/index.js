(function(controllers) {
    "use strict";

    var addPostController = require("./addPostController"),
        loginController = require("./loginController"),
        logoutController = require("./logoutController"),
        overViewController = require("./overViewController");

    controllers.init = function(app) {
        addPostController.init(app);
        loginController.init(app);
        logoutController.init(app);
        overViewController.init(app);
    };
}(module.exports));

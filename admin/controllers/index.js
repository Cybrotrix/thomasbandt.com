var addPostController = require("./addPostController"),
    loginController = require("./loginController"),
    logoutController = require("./logoutController"),
    overViewController = require("./overViewController");

module.exports = {
    init: init
};

function init(app) {
    addPostController.init(app);
    loginController.init(app);
    logoutController.init(app);
    overViewController.init(app);
}

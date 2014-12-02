var addPostController = require("./addPostController"),
    editPostController = require("./editPostController"),
    deletePostController = require("./deletePostController"),
    loginController = require("./loginController"),
    logoutController = require("./logoutController"),
    overViewController = require("./overViewController");

module.exports = {
    init: init
};

function init(app) {
    addPostController.init(app);
    editPostController.init(app);
    deletePostController.init(app);
    loginController.init(app);
    logoutController.init(app);
    overViewController.init(app);
}

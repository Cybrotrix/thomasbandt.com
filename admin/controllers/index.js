var addPostController = require("./posts/addPostController"),
    editPostController = require("./posts/editPostController"),
    deletePostController = require("./posts/deletePostController"),
    loginController = require("./authentication/loginController"),
    logoutController = require("./authentication/logoutController"),
    overViewController = require("./overview/overviewController"),
    assetsController = require("./assets/assetsController"),
    deleteAssetController = require("./assets/deleteAssetController");

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
    assetsController.init(app);
    deleteAssetController.init(app);
}

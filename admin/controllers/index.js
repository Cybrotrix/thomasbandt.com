var addPostController = require("./posts/addPostController"),
    editPostController = require("./posts/editPostController"),
    deletePostController = require("./posts/deletePostController"),
    loginController = require("./authentication/loginController"),
    logoutController = require("./authentication/logoutController"),
    overViewController = require("./overview/overviewController"),
    assetsController = require("./assets/assetsController"),
    deleteAssetController = require("./assets/deleteAssetController"),
    uploadAssetController = require("./assets/uploadAssetController"),
    routes = require("../../routes");

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
    uploadAssetController.init(app);

    app.get(routes.admin.index, function(request, response) {
        response.redirect(routes.admin.login);
    });
}

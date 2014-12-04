var routes = require("../../routes");

module.exports = {
    init: init
};

function init(app) {
    app.renderAdminView = renderView;

    require("./posts/addPostController").init(app);
    require("./posts/editPostController").init(app);
    require("./posts/deletePostController").init(app);
    require("./authentication/loginController").init(app);
    require("./authentication/logoutController").init(app);
    require("./overview/overviewController").init(app);
    require("./assets/assetsController").init(app);
    require("./assets/deleteAssetController").init(app);
    require("./assets/uploadAssetController").init(app);

    app.get(routes.admin.index, function(request, response) {
        response.redirect(routes.admin.login);
    });
}

function renderView(response, viewName, model) {
    model = model || {};
    model.layout = "../../admin/views/_layout";

    response.render("../admin/views/" + viewName, model);
}

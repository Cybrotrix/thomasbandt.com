var routes = require("../../routes");

module.exports = {
    authenticate: authenticateUser,
    renderAdminView: renderAdminView
};

function authenticateUser(request, response, next) {
    if (request.isAuthenticated()) {
        next();
    }
    else {
        response.redirect(routes.admin.login);
    }
}

function renderAdminView(response, viewName, model) {
    model = model || {};
    model.layout = "../../admin/views/_layout";

    response.render("../admin/views/" + viewName, model);
}

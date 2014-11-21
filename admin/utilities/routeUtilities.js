(function(module) {
    module.authenticate = function(request, response, next) {
        if (request.isAuthenticated()) {
            next();
        }
        else {
            response.redirect("/admin/login");
        }
    }

    module.renderAdminView = function(response, viewName, model) {
        model = model ? model : {};
        model.layout = "../../admin/views/_layout";

        response.render("../admin/views/" + viewName, model);
    };
}(module.exports));
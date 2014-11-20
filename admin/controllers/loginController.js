(function(loginController) {
    "use strict";

    loginController.init = function(app, renderAdminView) {
        app.get("/admin", function(request, response) {
            renderAdminView(response, "login", {
                message: "Hello Blogger!"
            });
        });
    };
}(module.exports));

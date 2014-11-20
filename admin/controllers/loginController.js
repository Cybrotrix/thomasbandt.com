(function(loginController) {
    loginController.init = function(app) {
        app.get("/admin", function(request, response) {
            response.send("Hello Admin");
        });
    };
}(module.exports));

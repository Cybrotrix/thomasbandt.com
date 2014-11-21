(function(module) {
    module.authenticate = function(request, response, next) {
        if (request.isAuthenticated()) {
            next();
        }
        else {
            response.redirect("/admin/login");
        }
    }
}(module.exports));
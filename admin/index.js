(function(admin) {
    var loginController = require("./controllers/loginController");

    admin.init = function(app) {
        loginController.init(app);
    };
}(module.exports));
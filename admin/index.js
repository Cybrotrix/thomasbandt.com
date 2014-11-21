(function(admin) {
    "use strict";

    var controllers = require("./controllers");

    admin.init = function(app) {
        controllers.init(app);
    };

    admin.services = {
        userValidator: require("./services/userValidator")
    };
}(module.exports));

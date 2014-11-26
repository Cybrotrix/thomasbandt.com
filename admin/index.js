(function(admin) {
    "use strict";

    var routes = require("../routes");
    var controllers = require("./controllers");

    admin.init = function(app, express) {
        configureAuthentication(app);
        configurePublicDirectories(app, express);

        controllers.init(app);
    };

    admin.services = {
        userValidator: require("./services/userValidator")
    };

    function configurePublicDirectories(app, express) {
        app.use("/admin/client", express.static(__dirname + "/client"));
    }

    function configureAuthentication(app) {
        var passport = require("passport");
        var LocalStrategy = require("passport-local").Strategy;

        app.use(passport.initialize());
        app.use(passport.session());

        passport.use(new LocalStrategy(
            function(username, password, done) {
                admin.services.userValidator.validateLogin(username, password).done(
                    function(result) {
                        if (result.errorMessage) {
                            done(null, false, { message: result.errorMessage });
                        } else {
                            done(null, result.user);
                        }
                    },
                    function(error) {
                        done(error);
                    }
                );
            }
        ));

        passport.serializeUser(function(user, done) {
            done(null, "admin");
        });

        passport.deserializeUser(function(user, done) {
            done(null, "admin");
        });

        app.use(function(request, response, next) {
            request.app.locals.isAuthenticated = request.isAuthenticated();
            request.app.locals.routes = routes;
            next();
        });
    }
}(module.exports));

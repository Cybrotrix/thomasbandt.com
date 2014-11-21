(function() {
    "use strict";

    var app = require("express")();
    var session = require("express-session");
    var bodyParser = require("body-parser");

    var passport = require("passport");
    var LocalStrategy = require("passport-local").Strategy;

    app.engine("handlebars", require("express-handlebars")());
    app.set("view engine", "handlebars");

    app.use(require("cookie-parser")());

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: false }));

    app.use(session({
        secret: "node-simple-blog",
        resave: false,
        saveUninitialized: true
    }))

    app.use(passport.initialize());
    app.use(passport.session());

    app.use(require('connect-flash')());

    passport.use(new LocalStrategy(
        function(username, password, done) {
            return done(null, false, { message: "Keine Ahnung" });
        }
    ));

    var admin = require("./admin");
    admin.init(app);

    app.listen(6969, function() {
        console.log("Server started listening at http://localhost:6969");
    });
}());

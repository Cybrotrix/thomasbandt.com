(function() {
    "use strict";

    var config = require("./config");
    var app = require("express")();

    configureViewEngine(app);
    configureCookieParser(app);
    configureSession(app);
    configureBodyParser(app);
    configureFlash(app);

    setUpAdmin(app);

    startServer(app);

    function configureViewEngine(app) {
        app.engine("handlebars", require("express-handlebars")());
        app.set("view engine", "handlebars");
    }

    function configureCookieParser(app) {
        app.use(require("cookie-parser")());
    }

    function configureSession(app) {
        var session = require("express-session");
        var MongoStore = require('connect-mongo')(session);

        app.use(session({
            secret: "node-simple-blog",
            resave: false,
            saveUninitialized: true,
            store: new MongoStore({
                db : config.database.databaseName
            })
        }));
    }

    function configureBodyParser(app) {
        var bodyParser = require("body-parser");

        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: false }));
    }

    function configureFlash(app) {
        app.use(require('connect-flash')());
    }

    function setUpAdmin(app) {
        require("./admin").init(app);
    }

    function startServer(app) {
        app.listen(6969, function () {
            console.log("Server started listening at http://localhost:6969");
        });
    }
}());

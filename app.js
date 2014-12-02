var config = require("./config"),
    express = require("express"),
    app = express();

process.env.DEBUG = false;

configureViewEngine(app);
configureCookieParser(app);
configureSession(app);
configureBodyParser(app);
configureFlash(app);

setUpDatabase();
setUpAdmin(app, express);

startServer(app);

function configureViewEngine(app) {
    var handlebars = require("express-handlebars");

    var configuredHandlebars = handlebars.create({
        helpers: {
            activeMenuItem: function(route, activeRoute) {
                return route === activeRoute ? "class=\"active\"" : "";
            },
            paramLink: function(route, parameterName, parameterValue) {
                return route.replace(parameterName, parameterValue);
            },
            section: function(name, options){
                if(!this.sections) {
                    this.sections = {};
                }

                this.sections[name] = options.fn(this);

                return null;
            }
        }
    });

    app.engine("handlebars", configuredHandlebars.engine);
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
            db : process.env.DEBUG === "true" ?
                    config.debug.database.databaseName :
                        config.database.databaseName
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

function setUpDatabase() {
    require("./data");
}

function setUpAdmin(app, express) {
    require("./admin").init(app, express);
}

function startServer(app) {
    app.listen(6969, function () {
        console.log("Server started listening at http://localhost:6969");
    });
}

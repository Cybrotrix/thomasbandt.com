var config = require("./config"),
    express = require("express"),
    routes = require("./routes"),
    routeUtils = require("./utils/routeUtils"),
    app = express();

setEnvironmentVariables();

configureViewEngine(app);
configurePublicDirectories(app, express);
configureCookieParser(app);
configureSession(app);
configureBodyParser(app);
configureFlash(app);
configureBusboy(app);
configureGlobalAppLocals(app);

setUpDatabase();

setUpAdmin(app);
setUpBlog(app);

startServer(app);

function setEnvironmentVariables() {
    process.env.DEBUG = false;
}

function configureViewEngine(app) {
    var handlebars = require("express-handlebars");

    var configuredHandlebars = handlebars.create({
        helpers: {
            activeMenuItem: function(route, activeRoute) {
                return route === activeRoute ? "class=\"active\"" : "";
            },
            actionLink: routeUtils.actionLink,
            postLink: routeUtils.postLink,
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

function configurePublicDirectories(app, express) {
    app.use("/upload", express.static(__dirname + "/upload"));
    app.use("/admin/client", express.static(__dirname + "/admin/client"));
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

function configureBusboy(app) {
    app.use(require("connect-busboy")());
}

function configureGlobalAppLocals(app) {
    app.use(function(request, response, next) {
        request.app.locals.routes = routes;
        request.app.locals.activeRoute = request.originalUrl;
        request.app.locals.metadata = config.metadata;
        request.app.locals.assets = config.assets;
        next();
    });
}

function setUpDatabase() {
    require("./data");
}

function setUpAdmin(app) {
    require("./admin").init(app);
}

function setUpBlog(app) {
    require("./blog").init(app);
}

function startServer(app) {
    app.listen(6969, function () {
        console.log("Server started listening at http://localhost:6969");
    });
}

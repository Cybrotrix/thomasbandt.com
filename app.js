var config = require("./config"),
    express = require("express"),
    routes = require("./routes"),
    routeUtils = require("./utils/routeUtils"),
    database = require("./data/database"),
    app = express();

setEnvironmentVariables();

database.connect()
    .then(function(message) {
        console.log(message);

        configureLogging();
        configureViewEngine(app);
        configurePublicDirectories(app, express);
        configureSession(app);
    })
    .catch(function(error) {
        console.error(error);
    });

function setEnvironmentVariables() {
    process.env.DEBUG = false;
}

function configureLogging() {
    var winston = require("winston");
    require("winston-mongodb").MongoDB;

    var transport;

    if (process.env.DEBUG === "true") {
        transport = new winston.transports.MongoDB({
            db: config.database.databaseName,
            username: config.database.userName,
            password: config.database.password
        });
    }
    else {
        transport = new winston.transports.MongoDB({
            db: config.debug.database.databaseName,
            username: config.debug.database.userName,
            password: config.debug.database.password
        });
    }

    winston.handleExceptions(transport);
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
            },
            ifCond: function(v1, operator, v2, options) {
                switch (operator) {
                    case '==':
                        return (v1 == v2) ? options.fn(this) : options.inverse(this);
                    case '===':
                        return (v1 === v2) ? options.fn(this) : options.inverse(this);
                    case '<':
                        return (v1 < v2) ? options.fn(this) : options.inverse(this);
                    case '<=':
                        return (v1 <= v2) ? options.fn(this) : options.inverse(this);
                    case '>':
                        return (v1 > v2) ? options.fn(this) : options.inverse(this);
                    case '>=':
                        return (v1 >= v2) ? options.fn(this) : options.inverse(this);
                    case '&&':
                        return (v1 && v2) ? options.fn(this) : options.inverse(this);
                    case '||':
                        return (v1 || v2) ? options.fn(this) : options.inverse(this);
                    default:
                        return options.inverse(this);
                }
            }
        }
    });

    app.engine("handlebars", configuredHandlebars.engine);
    app.set("view engine", "handlebars");
}

function configurePublicDirectories(app, express) {
    app.use("/upload", express.static(__dirname + "/upload"));
    app.use("/admin/client", express.static(__dirname + "/admin/client"));
    app.use("/blog/client", express.static(__dirname + "/blog/client"));
}

function configureCookieParser(app) {
    app.use(require("cookie-parser")());
}

function configureSession(app) {
    var session = require("express-session");
    var MongoStore = require('connect-mongo')(session);

    var connectionString = process.env.DEBUG !== "true" ?
        config.database.connectionString :
        config.debug.database.connectionString;

    var sessionStore = new MongoStore({ url: connectionString }, function() {
        configureCookieParser(app);

        app.use(session({
            secret: "node-simple-blog",
            resave: false,
            saveUninitialized: true,
            store: sessionStore
        }));

        configureBodyParser(app);
        configureFlash(app);
        configureBusboy(app);
        configureGlobalAppLocals(app);

        setUpAdmin(app);
        setUpBlog(app);

        startServer(app);
    });
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
        request.app.locals.blog = config.blog;
        request.app.locals.assets = config.assets;
        next();
    });
}

function setUpAdmin(app) {
    require("./admin").init(app);
}

function setUpBlog(app) {
    require("./blog").init(app);
}

function startServer(app) {
    app.listen(config.blog.sitePort, function () {
        console.log("Server started listening at " + config.blog.siteRootUrl);
    });
}

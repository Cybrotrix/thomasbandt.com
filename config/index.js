var fs = require("fs"),
    path = require("path");

var source = process.env.NODE_ENV !== "production" ?
        __dirname + "/config.debug.json" :
            path.join(__dirname, "../../config.production.json");

var config = JSON.parse(fs.readFileSync(source, "utf8"));

module.exports = config;

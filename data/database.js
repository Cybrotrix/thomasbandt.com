var config = require("../config"),
    mongoose = require("mongoose"),
    q = require("q");

module.exports = {
    connect: connect
}

var connectionString = process.env.DEBUG === "true" ?
    config.debug.database.connectionString :
    config.database.connectionString;

function connect() {
    var deferred = q.defer();

    mongoose.connect(connectionString);

    mongoose.connection.on("connected", function () {
        deferred.resolve("Connected successfully.");
    });

    mongoose.connection.on("error", function (error) {
        deferred.reject("Connection failed: " + error);
    });

    return deferred.promise;
}

mongoose.connection.on("disconnected", function () {
    console.log("Disconnected from " + connectionString);
});

process.on("SIGINT", function() {
    mongoose.connection.close(function () {
        console.log("Disconnected from " + connectionString + " through app termination");
        process.exit(0);
    });
});

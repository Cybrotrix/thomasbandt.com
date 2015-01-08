var config = require("../config"),
    mongoose = require("mongoose"),
    q = require("q");

module.exports = {
    connect: connect
};

function connect() {
    var deferred = q.defer();

    var connectionString = process.env.DEBUG === "true" ?
        config.test.database.connectionString :
        config.database.connectionString;

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
    console.log("Disconnected.");
});

process.on("SIGINT", function() {
    mongoose.connection.close(function () {
        console.log("Disconnected through app termination.");
        process.exit(0);
    });
});

var config = require("../config"),
    mongoose = require("mongoose");

mongoose.connect(config.database.connectionString);

mongoose.connection.on("connected", function () {
    console.log("Connected to " + config.database.connectionString);
});

mongoose.connection.on("error", function (error) {
    console.log("Connection to " + config.database.connectionString + " failed:" + error);
});

mongoose.connection.on("disconnected", function () {
    console.log("Disconnected from " + config.database.connectionString);
});

process.on("SIGINT", function() {
    mongoose.connection.close(function () {
        console.log("Disconnected from " + config.database.connectionString + " through app termination");
        process.exit(0);
    });
});

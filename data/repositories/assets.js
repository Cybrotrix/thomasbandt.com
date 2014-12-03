var _ = require("underscore"),
    q = require("q"),
    config = require("../../config"),
    path = require("path"),
    fs = require("fs");

module.exports = {
    all: getAllFiles,
    remove: removeFile
};

function getAllFiles() {
    var deferred = q.defer();

    fs.readdir(config.assets.uploadFolder, function(error, filePaths) {
        var statPromises = [];

        _.forEach(filePaths, function(filePath) {
            statPromises.push(getFileStats(filePath));
        });

        q.allSettled(statPromises).done(function(results) {
            var files = [];

            results.forEach(function(result) {
               files.push(result.value);
            });

            deferred.resolve(files);
        });
    });

    return deferred.promise;
}

function removeFile(fileName) {
    var deferred = q.defer();

    fs.unlink(config.assets.uploadFolder + fileName, function (error) {
        if (error) {
            deferred.reject(error);
        } else {
            deferred.resolve(true);
        }
    });

    return deferred.promise;
}

function getFileStats(fileName) {
    var deferred = q.defer();

    fs.stat(config.assets.uploadFolder + fileName, function(error, stats) {
        deferred.resolve({
            name: fileName,
            base64name: new Buffer(fileName).toString("base64"),
            size: stats.size,
            created: stats.ctime
        });
    });

    return deferred.promise;
}


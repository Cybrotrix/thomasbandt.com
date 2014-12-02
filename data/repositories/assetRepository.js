var _ = require("underscore"),
    q = require("q"),
    config = require("../../config"),
    fs = require("fs");

module.exports = {
    all: getAllFiles
};

function getAllFiles() {
    var deferred = q.defer();

    fs.readdir(config.assets.uploadFolder, function(error, paths) {
        var files = [];

        _.forEach(paths, function(path) {
            //var stats = fs.statSync(path);

            files.push({
                name: path
            })
        });

        deferred.resolve(files);
    });

    return deferred.promise;
}


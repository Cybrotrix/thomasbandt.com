var q = require("q"),
    fs = require("fs"),
    config = require("../../config");

module.exports = {
    getAdminUser: getAdminUser
};

function getAdminUser() {
    var deferred = q.defer();

    fs.readFile(config.admin.credentialsPath, "utf8", function (error, data) {
        if (error) {
            deferred.reject(error);
        } else {
            deferred.resolve(JSON.parse(data));
        }
    });

    return deferred.promise;
}

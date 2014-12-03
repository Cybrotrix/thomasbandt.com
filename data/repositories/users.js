var q = require("q"),
    config = require("../../config");

module.exports = {
    getAdminUser: getAdminUser
};

function getAdminUser() {
    var deferred = q.defer();

    deferred.resolve({
        userName: config.admin.credentials.userName,
        hashedPassword: config.admin.credentials.hashedPassword
    });

    return deferred.promise;
}

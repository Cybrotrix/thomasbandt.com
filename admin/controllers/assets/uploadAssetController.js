var config = require("../../../config"),
    routes = require("../../../routes"),
    fs = require("fs");

module.exports = {
    init: init
};

function init(app) {
    app.post(routes.admin.uploadAsset, function(request, response) {
        var fileStream;
        request.pipe(request.busboy);

        request.busboy.on("file", function (fieldName, file, fileName) {
            fileStream = fs.createWriteStream(config.assets.uploadFolder + fileName);
            file.pipe(fileStream);

            fileStream.on("close", function () {
                request.flash("asset-message", "Asset '" + fileName + "' successfully uploaded.");
                response.redirect(routes.admin.assets);
            });
        });
    });
}

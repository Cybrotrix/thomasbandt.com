var routes = require("../../routes");

module.exports = {
    init: init
};

function init(app) {
    app.get(routes.blog.pageNotFound, function(request, response) {
        app.render404(response);
    });
}

var routes = require("../../routes");

module.exports = {
    init: init
};

function init(app) {
    app.renderBlogView = renderView;
    app.render404 = render404;

    require("./postsController").init(app);
    require("./postDetailController").init(app);
    require("./aboutController").init(app);
    require("./archiveController").init(app);
    require("./contactController").init(app);
    require("./feedController").init(app);
    require("./sitemapController").init(app);

    // Must be registered last
    require("./pageNotFoundController").init(app);
}

function render404(response) {
    response.status(404);

    renderView(response, "404");
}

function renderView(response, viewName, model) {
    model = model || {};
    model.layout = "../../blog/views/_layout";

    response.render("../blog/views/" + viewName, model);
}
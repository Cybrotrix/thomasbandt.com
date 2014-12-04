var controllers = require("./controllers");

module.exports = {
    init: init
};

function init(app) {
    controllers.init(app);
}
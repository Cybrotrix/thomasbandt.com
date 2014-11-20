(function() {
    "use strict";

    var app = require("express")();

    app.engine('handlebars', require("express-handlebars")());
    app.set('view engine', 'handlebars');

    var admin = require("./admin");
    admin.init(app);

    app.listen(6969, function() {
        console.log("Server started listening at http://localhost:6969");
    });
}());

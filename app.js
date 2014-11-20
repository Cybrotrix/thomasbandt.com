(function() {
    "use strict";

    var app = require("express")();

    app.get("/", function(request, response) {
        response.send("Hello World from Express");
    });

    app.listen(6969, function() {
        console.log("Server started listening at http://localhost:6969");
    });
}());

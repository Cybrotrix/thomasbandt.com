(function() {
    "use strict";

    var http = require("http");

    var server = http.createServer(function(request, response) {
        response.end("Hello World!");
    });

    server.listen(6969);
}());
console.log("Hello World");
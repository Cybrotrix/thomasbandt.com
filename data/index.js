(function(data) {
    "use strict";

    data.posts = require("./postRepository");
    data.users = require("./userRepository");
}(module.exports));

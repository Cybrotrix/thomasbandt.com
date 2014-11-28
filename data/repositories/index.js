(function(repositories) {
    "use strict";

    repositories.posts = require("./postRepository");
    repositories.users = require("./userRepository");
}(module.exports));

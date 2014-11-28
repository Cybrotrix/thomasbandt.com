(function() {
    "use strict";

    var expect = require("chai").expect;

    describe("PostRepository", function() {
        describe("When saving a new blog post", function() {
            var sut;

            before(function() {
                sut = require("./userRepository");
            });

            it("it is stored to the database", function() {
                throw "not implemented";
            });

            it("an id is assigned to it", function() {
                throw "not implemented";
            });
        });
    });
}());

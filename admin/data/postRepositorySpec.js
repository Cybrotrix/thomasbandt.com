(function() {
    "use strict";

    var expect = require("chai").expect;

    describe("PostRepository", function() {
        describe("When saving a new blog post", function() {
            var sut;

            before(function() {
                sut = require("./postRepository");
            });

            it("it is stored to the database", function() {
                throw "not implemented";
            });

            it("an id is assigned to it", function() {
                throw "not implemented";
            });

            function getDummyPost() {
                return {
                    title: "Dummy Post Title",
                    abstract: "Abstract",
                    content: "Content",
                    contentHtml: "Html",
                    published: true
                }
            }
        });
    });
}());

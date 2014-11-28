(function() {
    "use strict";

    var expect = require("chai").expect;

    describe("PostRepository", function() {
        describe("When saving a new blog post", function() {
            var sut;

            before(function() {
                sut = require("./postRepository");
            });

            it("it is stored to the database", function(done) {
                throw "foo 1";
                /*
                sut.save(getDummyPost())
                    .then(function(post) {
                        return post.id;
                    }).done(function(id) {
                        sut.find(id).done(function(post) {
                            expect(post.id).to.be.ok("Missing id");
                            done();
                        }, done);
                    }, done);
                    */
            });

            it("an id is assigned to it", function(done) {
                throw "foo 2";
                /*
                sut.save(getDummyPost()).done(function(post) {
                    expect(post.id).to.be.ok("Missing id");
                    done();
                }, done);*/
            });

            function getDummyPost() {
                return {
                    title: "Dummy Post Title" + Math.random().toString(36),
                    abstract: "Abstract",
                    content: "Content",
                    contentHtml: "Html",
                    date: new Date(),
                    published: true
                }
            }
        });
    });
}());

var expect = require("chai").expect,
    _ = require("underscore");

describe("PostRepository", function() {
    var sut;

    before(function() {
        sut = require("./postRepository");
        require("../database");
    });

    describe("When saving a new blog post", function() {
        it("it is stored to the database", function(done) {
            sut.add(getDummyPost())
                .then(function(post) {
                    return post.id;
                })
                .done(function(id) {
                    sut.find(id).done(function(post) {
                        expect(post.id).to.be.ok();
                        done();
                    }, done);
                }, done);
        });

        it("an id is assigned to it", function(done) {
            sut.add(getDummyPost()).done(function(post) {
                expect(post.id).to.be.ok();
                done();
            }, done);
        });
    });

    describe("When looking for a blog post by its id", function() {
        it("will return the post", function(done) {
            sut.add(getDummyPost()).done(function(post) {
                expect(post.id).to.be.ok();
                done();
            }, done);
        });
    });

    describe("When requesting all blog posts", function() {
        it("will deliver all existing blog posts", function(done) {
            var dummyPost = getDummyPost();
            dummyPost.title = Math.random().toString(36);

            sut.add(dummyPost)
                .then(function() {
                    return sut.add(dummyPost);
                })
                .then(sut.all)
                .done(function(posts) {
                    var count = _.filter(posts, function(post) {
                        return post.title === dummyPost.title;
                    }).length;

                    expect(count).to.equal(2);

                    done();
                }, done);
        })
    })
});

function getDummyPost() {
    return {
        title: "Dummy Post Title",
        abstract: "Abstract",
        content: "Content",
        contentHtml: "Html",
        date: new Date(),
        published: true
    }
}

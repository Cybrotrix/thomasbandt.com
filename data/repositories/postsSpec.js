var expect = require("chai").expect,
    _ = require("underscore");

describe("PostRepository", function() {
    var sut;

    before(function() {
        sut = require("./posts");
        require("../database");
    });

    describe("When adding a new blog post", function() {
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
        });
    });

    describe("When removing a blog post", function() {
       it("gets deleted from the database", function(done) {
           var postId;

           sut.add(getDummyPost())
               .then(function(post) {
                   postId = post.id;
                   return sut.remove(post.id);
               })
               .then(function() {
                  return sut.find(postId);
               })
               .done(function(post) {
                   expect(post).to.be.null();
                   done();
               }, done);
       });
    });

    describe("When updating a blog post", function() {
        it("updates the title", function(done) {
            var randomTitle = Math.random().toString(36);

            sut.add(getDummyPost())
                .then(function(post) {
                    post.title = randomTitle;

                    return sut.update(post);
                })
                .done(function(updatedPost) {
                    expect(updatedPost.title).to.be.equal(randomTitle);
                    done();
                }, done);
        });

        it("updates the abstract", function(done) {
            var randomAbstract = Math.random().toString(36);

            sut.add(getDummyPost())
                .then(function(post) {
                    post.abstract = randomAbstract;

                    return sut.update(post);
                })
                .done(function(updatedPost) {
                    expect(updatedPost.abstract).to.be.equal(randomAbstract);
                    done();
                }, done);
        });

        it("updates the content", function(done) {
            var randomContent = Math.random().toString(36);

            sut.add(getDummyPost())
                .then(function(post) {
                    post.content = randomContent;

                    return sut.update(post);
                })
                .done(function(updatedPost) {
                    expect(updatedPost.content).to.be.equal(randomContent);
                    done();
                }, done);
        });

        it("updates the content html", function(done) {
            var randomHtml = Math.random().toString(36);

            sut.add(getDummyPost())
                .then(function(post) {
                    post.contentHtml = randomHtml;

                    return sut.update(post);
                })
                .done(function(updatedPost) {
                    expect(updatedPost.contentHtml).to.be.equal(randomHtml);
                    done();
                }, done);
        });

        it("updates the publishing flag", function(done) {
            var dummyPost = getDummyPost();
            dummyPost.published = true;

            sut.add(dummyPost)
                .then(function(post) {
                    post.published = false;

                    return sut.update(post);
                })
                .done(function(updatedPost) {
                    expect(updatedPost.published).to.be.false();
                    done();
                }, done);
        });
    });
});

function getDummyPost() {
    return {
        title: "Dummy Post Title",
        abstract: "Abstract",
        content: "Content",
        contentHtml: "Html",
        date: new Date(),
        published: true
    };
}

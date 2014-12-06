var expect = require("chai").expect;

describe("RouteUtils", function() {
    var sut;

    before(function() {
        sut = require("./routeUtils");
    });

    describe("When a slug for a Blog Post is created ...", function() {
        it("supports German Umlauts and ß and includes the date", function() {
            var post = {
                date: new Date(2014, 11, 4),
                title: "Sie läuft in einen Fluss und tötet alle grünen Frösche mit süßem Zucker."
            };

            var result = sut.slugFromPost(post);

            expect(result).to.be.equal("2014/12/4/sie-laeuft-in-einen-fluss-und-toetet-alle-gruenen-froesche-mit-suessem-zucker");
        });
    });

    describe("When a slug is created from route parameters", function() {
        it("works as expected and case insensitive", function() {
            var params = {
                year: 2014,
                month: 12,
                day: 6,
                title: "hello-World-Foo"
            };

            var result = sut.slugFromRouteParams(params);

            expect(result).to.be.equal("2014/12/6/hello-world-foo");
        });
    });
});

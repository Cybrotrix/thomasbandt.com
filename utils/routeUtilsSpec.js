var expect = require("chai").expect;

describe("RouteUtils", function() {
    var sut;

    before(function() {
        sut = require("./routeUtils");
    });

    describe("When a URL for a Blog Post is created ...", function() {
        it("supports German Umlauts and ß and includes the date", function() {
           var post = {
               created: new Date(2014, 12, 4),
               title: "Sie läuft in einen Fluss und tötet alle grünen Frösche mit süßem Zucker."
           };

            var result = sut.friendlyUrlFragment(post);

            expect(result).to.be.equal("2014/12/4/sie-laeuft-in-einen-fluss-und-toetet-alle-gruenen-froesche-mit-suessem-zucker");
        });
    });
});

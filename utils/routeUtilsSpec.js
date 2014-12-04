var expect = require("chai").expect;

describe("RouteUtils", function() {
    var sut;

    before(function() {
        sut = require("./routeUtils");
    });

    describe("When a URL for a Blog Post is created ...", function() {
        it("supports German Umlauts and ß and includes the date", function() {
            var post = {
                created: new Date(2014, 11, 4),
                title: "Sie läuft in einen Fluss und tötet alle grünen Frösche mit süßem Zucker."
            };

            var result = sut.friendlyUrlFragment(post);

            // TODO: Expect umlauts to be replaced correctly
            expect(result).to.be.equal("2014/12/4/sie-lauft-in-einen-fluss-und-totet-alle-grunen-frosche-mit-sussem-zucker");
        });
    });
});

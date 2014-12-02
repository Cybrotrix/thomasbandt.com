var expect = require("chai").expect,
    _ = require("underscore");

describe("AssetRepository", function() {
    var sut;

    before(function() {
        sut = require("./assetRepository");
    });

    describe("When requesting all files", function() {
        it("A list of files in the upload folder is returned", function(done) {
           sut.all().done(function(files) {
               var filtered = _.filter(files, function(file) {
                    return file.name === "dont-remove-me.txt";
               });

               expect(filtered.length).to.be.equal(1);
               done();
           }, done);
        });
    });

    describe("When a file is returned", function() {
        it("its name is set", function(done) {
            sut.all().done(function(files) {
                var dontRemoveMe = GetDontRemoveMeTxt(files);

                expect(dontRemoveMe.name).to.be.ok();
                done();
            }, done);
        })

        it("its creation date is set", function(done) {
            sut.all().done(function(files) {
                var dontRemoveMe = GetDontRemoveMeTxt(files);

                expect(dontRemoveMe.created).to.be.ok();
                done();
            }, done);
        })

        it("its file size is set", function(done) {
            sut.all().done(function(files) {
                var dontRemoveMe = GetDontRemoveMeTxt(files);

                expect(dontRemoveMe.size).to.be.greaterThan(0);
                done();
            }, done);
        })
    });

    function GetDontRemoveMeTxt(files) {
        var filteredFiles = _.filter(files, function(file) {
            return file.name === "dont-remove-me.txt";
        })

        return filteredFiles[0];
    }
});

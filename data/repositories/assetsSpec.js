var config = require("../../config"),
    expect = require("chai").expect,
    fs = require("fs"),
    q = require("q"),
    _ = require("underscore");

describe("AssetRepository", function() {
    var sut;

    before(function() {
        sut = require("./assets");
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
        it("has a name", function(done) {
            sut.all().done(function(files) {
                var dontRemoveMe = GetDontRemoveMeTxt(files);

                expect(dontRemoveMe.name).to.be.ok();
                done();
            }, done);
        });

        it("has a base64 encoded version of the name", function(done) {
            sut.all().done(function(files) {
                var dontRemoveMe = GetDontRemoveMeTxt(files);
                var base64name = new Buffer(dontRemoveMe.name).toString("base64");

                expect(dontRemoveMe.base64name).to.be.equal(base64name);
                done();
            }, done);
        });

        it("has a creation date", function(done) {
            sut.all().done(function(files) {
                var dontRemoveMe = GetDontRemoveMeTxt(files);

                expect(dontRemoveMe.created).to.be.ok();
                done();
            }, done);
        })

        it("has a file size", function(done) {
            sut.all().done(function(files) {
                var dontRemoveMe = GetDontRemoveMeTxt(files);

                expect(dontRemoveMe.size).to.be.greaterThan(0);
                done();
            }, done);
        })
    });

    describe("When a file is being removed", function() {
        it("gets deleted from the file system", function(done) {
            var testFile = createTestFileSync();
            expect(fs.existsSync(config.assets.uploadFolder + testFile)).to.be.true();

            sut.remove(testFile).done(function() {
                expect(fs.existsSync(config.assets.uploadFolder + testFile)).to.be.false();

                done();
            }, done);
        });
    })

    function createTestFileSync() {
        var fileName = Math.random().toString(36) + ".txt";

        fs.writeFileSync(config.assets.uploadFolder + fileName, "Demo");

        return fileName;
    }

    function GetDontRemoveMeTxt(files) {
        var filteredFiles = _.filter(files, function(file) {
            return file.name === "dont-remove-me.txt";
        })

        return filteredFiles[0];
    }
});

var mongoose = require("mongoose");

module.exports = mongoose.model("BlogPost", new mongoose.Schema({
    title: String,
    abstract: String,
    content: String,
    contentHtml: String,
    date: { type: Date, default: Date.now },
    published: Boolean
}));

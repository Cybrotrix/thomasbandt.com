var mongoose = require("mongoose");

mongoose.model("BlogPost", new mongoose.Schema({
    title: String,
    abstract: String,
    content: String,
    contentHtml: String,
    date: { type: Date, default: Date.now },
    published: Boolean
}));

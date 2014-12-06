var mongoose = require("mongoose");

var blogPostSchema = new mongoose.Schema({
    title: String,
    abstract: String,
    content: String,
    contentHtml: String,
    slug: { type: String, index: { unique: true } },
    date: { type: Date },
    published: Boolean
});

blogPostSchema.plugin(require("mongoose-paginate"));

module.exports = mongoose.model("BlogPost", blogPostSchema);

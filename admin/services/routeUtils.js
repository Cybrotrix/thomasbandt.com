var slug = require("slug");

module.exports = {
    slug : getSlug
};

slug.defaults.charmap['ä'] = 'ae';
slug.defaults.charmap['ö'] = 'oe';
slug.defaults.charmap['ü'] = 'ue';

function getSlug(post) {
    var urlParts =
        [
            post.date.getFullYear(),
            post.date.getMonth() + 1,
            post.date.getDate(),
            slug(post.title.toLowerCase())
        ];

    return urlParts.join("/");
}

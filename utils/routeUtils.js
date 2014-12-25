var slug = require("slug"),
    routes = require("../routes");

module.exports = {
    actionLink : getActionLink,
    postLink: getPostLink,
    slugFromPost : getSlugFromPost
};

slug.defaults.charmap['ä'] = 'ae';
slug.defaults.charmap['ö'] = 'oe';
slug.defaults.charmap['ü'] = 'ue';

function getSlugFromPost(post) {
    return slug(post.title.toLowerCase());
}

function getActionLink(route, parameterName, parameterValue) {
    return route.replace(parameterName, parameterValue);
}

function getPostLink(slug) {
    return routes.blog.home + slug;
}
var slug = require("slug");

module.exports = {
    actionLink : getActionLink,
    slugFromPost : getSlugFromPost,
    slugFromRouteParams : slugFromRouteParams
};

slug.defaults.charmap['ä'] = 'ae';
slug.defaults.charmap['ö'] = 'oe';
slug.defaults.charmap['ü'] = 'ue';

function getSlugFromPost(post) {
    var slugParts =
        [
            post.date.getFullYear(),
            post.date.getMonth() + 1,
            post.date.getDate(),
            slug(post.title.toLowerCase())
        ];

    return slugParts.join("/");
}

function slugFromRouteParams(parameters) {
    var slugParts =
        [
            parameters.year,
            parameters.month,
            parameters.day,
            parameters.title
        ];

    return slugParts.join("/").toLowerCase();
}

function getActionLink(route, parameterName, parameterValue) {
    return route.replace(parameterName, parameterValue);
}

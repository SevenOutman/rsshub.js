const request = require('./request');
const r = require.context('../feeds', false, /\.json$/)

function dashToUnderscore(str) {
    return str.replace(/[^a-z0-9]/g, '_');
}

function fillURL(url, params = {}) {
    return url.replace(/:\w+(?=\/|$)/g, function (match) {
        return params[match.substr(1, match.length - 1)] || match;
    });
}

function createRequestFunction(url) {
    return function (params) {
        return request(fillURL(url, params));
    }
}

const feeds = r.keys().reduce(function (acc, key) {
    const name = dashToUnderscore(key.match(/^\.\/(.+?)\.json$/)[1]);
    const { namespace, paths = {}, path } = r(key);
    return Object.assign(acc, {
        [name]: Object.keys(paths).reduce(function (result, path) {
            return Object.assign(result, {
                [dashToUnderscore(path)]: createRequestFunction(`/${namespace}/${paths[path]}`)
            });
        }, path !== undefined ? createRequestFunction(`/${path}`) : {})
    });
}, {});

module.exports = feeds;

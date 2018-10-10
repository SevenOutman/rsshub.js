const request = require('./request');
const r = require.context('../feeds', false, /\.json$/);

const dashToUnderscore = str => str.replace(/[^a-z0-9]/g, '_');

const fillURL = (url, params = {}) => {
    let [path, ...patterns] = url.split('/:');
    for (let pattern of patterns) {
        const isOptional = pattern.endsWith('?');
        if (isOptional) pattern = pattern.slice(0, -1);
        if (pattern in params) {
            path += '/' + params[pattern];
        } else if (!isOptional)
            throw new Error(`[${pattern}] is required in [${url}]`);
    }
    return path;
};

const createRequestFunction = url => params => request(fillURL(url, params));

const feeds = r.keys().reduce((acc, key) => {
    const name = dashToUnderscore(key.match(/^\.\/(.+?)\.json$/)[1]);
    const { namespace, paths = {}, path } = r(key);
    return Object.assign(acc, {
        [name]: Object.keys(paths).reduce((result, path) => {
            const fn = createRequestFunction(`/${namespace}/${paths[path]}`);
            return Object.assign(result, { [dashToUnderscore(path)]: fn });
        }, path != null ? createRequestFunction(`/${namespace}/${path}`) : {}),
    });
}, {});

module.exports = feeds;

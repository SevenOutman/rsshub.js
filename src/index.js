const feeds = require('./feeds');
const request = require('./request');

const rsshub = {
    config: request.config,
    feeds: feeds,
    request: request
};

module.exports = rsshub;
module.exports.feeds = feeds;
module.exports.request = request;

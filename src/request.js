const axios = require('axios');
const parser = new (require('rss-parser'));

const defaultConfig = {
    baseURL: 'https://rsshub.app'
};

let config = Object.assign({}, defaultConfig);

function parseRSS(raw) {
    return parser.parseString(raw);
}

class RequestSetup {

    constructor(path) {
        this.__path = path;
    }

    _request(suffix) {
        return axios(`${this.__path}${suffix}`, config)
            .then(function (res) {
                return res.data;
            });
    }

    get() {
        return this.rss2();
    }

    rss2() {
        return this._request('.rss').then(parseRSS);
    }

    atom() {
        return this._request('.atom').then(parseRSS);
    }

    json() {
        return this._request('.json');
    }
}

function request(path) {
    return new RequestSetup(path);
}

request.config = function (values) {
    Object.assign(config, values);
};

module.exports = request;

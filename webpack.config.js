const path = require('path');

module.exports = {
    entry: {
        index: './src/index.js',
        feeds: './src/feeds.js',
    },
    output: {
        path: path.resolve(__dirname, ''),
        libraryTarget: 'commonjs2'
    },
    externals: {
        axios: {
            commonjs: 'axios',
            commonjs2: 'axios',
            amd: 'axios',
            root: 'axios'
        },
        'rss-parser': {
            commonjs: 'rss-parser',
            commonjs2: 'rss-parser',
            amd: 'rss-parser',
            root: 'rss-parser'
        }
    }
};

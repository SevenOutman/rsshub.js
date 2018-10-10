// usage:
//   0. host your rsshub, change the `baseUrl` below (under `const got = ...`)
//   1. yarn && node update.js (run this file)
//   2. move generated feeds/ and feeds.d.ts outside

const { isEmpty, first, size, capitalize } = require('lodash');
const { ensureDirSync, outputFile, outputJson, readJson } = require('fs-extra');

const got = require('got').extend({
  baseUrl: 'http://localhost:1200',
  json: true,
});

const clean = ([path, params]) => {
  const result = [path.join('/'), ...params].join('/:');
  return result.replace(/^\/|\/$/g, '');
};

(async () => {
  const { body: { status, data, message } } = await got('/api/routes');
  console.log(message);
  if (status !== 'success') return;
  console.log('start processing routes ...');
  
  const feeds = {};
  for (const [name, { routes }] of Object.entries(data)) {
    feeds[name] = { namespace: name };
    const paths = routes.map(r => {
      const [path, ...params] = r.split('/:');
      return [path.split('/').slice(2), params];
    });
    feeds[name].paths = {};
    for (let [path, params] of paths) {
      feeds[name].paths[path.join('_').split('_').join('-')] = clean([path, params]);
    }
    if (feeds[name].paths['']) {
      feeds[name].path = feeds[name].paths[''];
      delete feeds[name].paths[''];
      if (isEmpty(feeds[name].paths))
        delete feeds[name].paths;
    }
  }
  const descs = (await readJson('descriptions.json', { throws: false })) || {};
  for (const [name, desc] of Object.entries(descs))
    if (feeds[name]) feeds[name].description = desc;

  ensureDirSync('feeds');
  for (const [name, data] of Object.entries(feeds)) {
    outputJson(`feeds/${name}.json`, data, { spaces: 2 });
  }

  let d = '';
  const interfaces = {};
  for (let [name, { paths, path }] of Object.entries(feeds)) {
    let x = '';
    if (!isNaN(name[0])) name = 'I' + name;
    name = name.replace(/\.\w/g, x => x[1].toUpperCase());
    const interfaceName = capitalize(name) + 'Feed';
    interfaces[name.toLowerCase()] = interfaceName;
    let e = '';
    if (path != null) {
      const params = path.split(/\/?:/).slice(1).map(p => {
        let t = `${p}: string`;
        if (p.includes('id') || p.includes('num')) t += ' | number';
        return t;
      });
      const f = isEmpty(params) ? '' : `<{ ${params.join(', ')} }>`;
      e = ` extends RSSHubFeedEndpoint${f}`;
    }
    const c = [];
    if (paths != null) {
      for (let [slug, url] of Object.entries(paths)) {
        const params = url.split(/\/?:/).slice(1).map(p => {
          let t = `${p}: string`;
          if (p.includes('id') || p.includes('num')) t += ' | number';
          return t;
        });
        const key = `    ${slug.replace(/-/g, '_')}`;
        const f = isEmpty(params) ? '' : `<{ ${params.join(', ')} }>`;
        c.push(`${key}: RSSHubFeedEndpoint${f};`);
      }
    }
    x += `interface ${interfaceName}${e} {\n${c.join('\n')}\n}\n`;
    d += x + '\n';
  }
  d += 'export interface RSSHubFeeds {\n';
  for (const [name, interface] of Object.entries(interfaces)) {
    d += `    ${name}: ${interface};\n`;
  }
  d += '}\n';
  d = `import {RSSHubRequestSetup} from "./index";

interface RSSHubFeedEndpoint<T = void> {
    (params?: T): RSSHubRequestSetup;
}

interface Feed {
    [key: string]: RSSHubFeedEndpoint<any>;
}
` + d + `
declare const Feeds: RSSHubFeeds;
export default Feeds;
`;
  outputFile('feeds.d.ts', d);
  console.log('done.');

  // const hub = require('rsshub.js');
  // hub.config({ baseURL: 'http://localhost:1200' });
  // const json = await hub.feeds['3dm'].news().json();
  // console.log('test requesting 3dm.news() =>', size(json));
})();

<p align="center">
<img src="https://github.com/SevenOutman/rsshub.js/blob/develop/logo.png" alt="rsshub.js" width="100">
</p>

> :cake: JavaScript library for [RSSHub](https://github.com/DIYgod/RSSHub).


[![npm](https://img.shields.io/npm/v/rsshub.js.svg?style=flat-square)](https://www.npmjs.com/package/rsshub.js)


## Installation

    yarn add rsshub.js
    
or if you prefer `npm`

    npm i rsshub.js
    
    
## Usage

If you don't know [RSSHub](https://github.com/DIYgod/RSSHub), you should check it out before getting into this project.

#### RSSHub Feeds

Use any [RSSHub Feeds](https://docs.rsshub.app/#bilibili) as you already know how.

```js
import feeds from 'rsshub.js/feeds'

feeds.bilibili.user_video({ uid: '2267573' })
     .rss2()
     // or .atom(), .json(), corresponding to three different format
     // or .get(), defaults to .rss2()
     .then((data) => {
         console.log(data)
     })
```


#### Request

If RSSHub.js doesn't catch up with RSSHub's feeds updates, use `rsshub.request()` to request a feed directly.

```js
import rsshub from 'rsshub.js'
rsshub.request('/some/missing/feed')
      .rss2()
```


#### Config

`rsshub.config()` takes an config object of the same structure that `axios` does. 
For example if you want you call a RSSHub instance you deployed yourself instead of `https://rsshub.app`

```js
import rsshub from 'rsshub.js'
rsshub.config({ baseURL: 'https://my-own-rsshub.com' })
```


## Related projects

- [RSSHub](https://github.com/DIYgod/RSSHub)


## License

RSSHub.js is [MIT Licensed](https://github.com/SevenOutman/rsshub.js/blob/master/LICENSE). 

Copyright (c) 2018-present Shenghao "Doma" Lei


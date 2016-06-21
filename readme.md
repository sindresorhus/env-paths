# env-paths [![Build Status](https://travis-ci.org/sindresorhus/env-paths.svg?branch=master)](https://travis-ci.org/sindresorhus/env-paths)

> Get paths for storing things like data, config, cache, etc


## Install

```
$ npm install --save env-paths
```


## Usage

```js
const envPaths = require('env-paths');
const paths = envPaths('MyApp');

paths.data;
//=> '/home/sindresorhus/.local/share/MyApp'

paths.config
//=> '/home/sindresorhus/.config/MyApp'
```


## API

### paths = envPaths(name)

#### name

Type: `string`

Name of your project. Used to generate the paths.

### paths.data

Directory for data files.

### paths.config

Directory for config files.

### paths.cache

Directory for non-essential data files.

### paths.log

Directory for log files.

### paths.temp

Directory for temporary files.


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)

# env-paths

> Get paths for storing things like data, config, cache, etc

Uses the correct OS-specific paths. Most developers get this wrong.


## Install

```
$ npm install env-paths
```


## Usage

```js
const envPaths = require('env-paths');

const paths = envPaths('MyApp');

paths.data;
//=> '/home/sindresorhus/.local/share/MyApp-nodejs'

paths.config
//=> '/home/sindresorhus/.config/MyApp-nodejs'
```


## API

### paths = envPaths(name, options?)

Note: It only generates the path strings. It doesn't create the directories for you. You could use [`make-dir`](https://github.com/sindresorhus/make-dir) to create the directories.

#### name

Type: `string`

Name of your project. Used to generate the paths.

#### options

Type: `object`

##### suffix

Type: `string`<br>
Default: `'nodejs'`

**Don't use this option unless you really have to!**<br>
Suffix appended to the project name to avoid name conflicts with native
apps. Pass an empty string to disable it.

### paths.data

Directory for data files.

### paths.config

Directory for config files.

Example locations (with the default `nodejs` [suffix](#suffix)):

- macOS: `~/Library/Preferences/MyApp-nodejs`
- Windows: `%APPDATA%\MyApp-nodejs\Config`
- Linux: `~/.config/MyApp-nodejs` (or `$XDG_CONFIG_HOME/MyApp-nodejs`)

### paths.cache

Directory for non-essential data files.

### paths.log

Directory for log files.

### paths.temp

Directory for temporary files.


---

<div align="center">
	<b>
		<a href="https://tidelift.com/subscription/pkg/npm-env-paths?utm_source=npm-env-paths&utm_medium=referral&utm_campaign=readme">Get professional support for this package with a Tidelift subscription</a>
	</b>
	<br>
	<sub>
		Tidelift helps make open source sustainable for maintainers while giving companies<br>assurances about security, maintenance, and licensing for their dependencies.
	</sub>
</div>

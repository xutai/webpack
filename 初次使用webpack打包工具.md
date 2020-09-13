



如果你是第一次使用webpack，那么就跟着这个文档看。





先进入Guides的[页面](https://webpack.js.org/guides/)，先安装webpack。

#### 安装

Installation [链接](https://webpack.js.org/guides/installation/)

第一次安装webpack，根据自己的版本，我这里要安装webpack-cli

```shell
npm install --save-dev webpack-cli
```

之后安装webpack。这里是本地安装，当然还有全局安装和bleeding edge尖端的大概就是说测试或者最新版，官方推荐本地安装，自己好控制webpack版本。

```
// npm install --save-dev webpack@<version>
// webpack v4.39.2
npm install --save-dev webpack@4.39.2
```

运行

```
$ /node_modules/.bin/webpack
or
$ npx webpack
```



直接这么用会报错，看一下报错内容

```sh
$ ./node_modules/.bin/webpack

Insufficient number of arguments or no entry found.
Alternatively, run 'webpack(-cli) --help' for usage info.

Hash: 344033fb7a0ea32dd56b
Version: webpack 4.39.2
Time: 31ms
Built at: 08/15/2019 10:04:45 AM

WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. 
Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/

ERROR in Entry module not found: Error: Can't resolve './src' in 'E:\webpack\webpackproject\Installation'
```

主要报错是说没有无法解析'./src'目录。默认情况下的源文件目录是这个src目录，因为我们上面并任何src里面文件去使用，所以报错。



查看帮助

```
$ npx webpack --help
```

输出结果

```
$ npx webpack --help
webpack-cli 3.3.6

Usage: webpack-cli [options]
       webpack-cli [options] --entry <entry> --output <output>
       webpack-cli [options] <entries...> --output <output>
       webpack-cli <command> [options]

For more information, see https://webpack.js.org/api/cli/.

Config options:
  --config               Path to the config file
                         [string] [default: webpack.config.js or webpackfile.js]
  --config-register, -r  Preload one or more modules before loading the webpack
                         configuration      [array] [default: module id or path]
  --config-name          Name of the config to use                      [string]
  --env                  Environment passed to the config, when it is a function
  --mode                 Enable production optimizations or development hints.
                                  [choices: "development", "production", "none"]

Basic options:
  --context    The base directory (absolute path!) for resolving the `entry`
               option. If `output.pathinfo` is set, the included pathinfo is
               shortened to this directory.
                                       [string] [default: The current directory]
  --entry      The entry point(s) of the compilation.                   [string]
  --watch, -w  Enter watch mode, which rebuilds on file change.        [boolean]
  --debug      Switch loaders to debug mode                            [boolean]
  --devtool    A developer tool to enhance debugging.                   [string]
  -d           shortcut for --debug --devtool eval-cheap-module-source-map
               --output-pathinfo                                       [boolean]
  -p           shortcut for --optimize-minimize --define
               process.env.NODE_ENV="production"                       [boolean]
  --progress   Print compilation progress in percentage                [boolean]

Module options:
  --module-bind       Bind an extension to a loader                     [string]
  --module-bind-post  Bind an extension to a post loader                [string]
  --module-bind-pre   Bind an extension to a pre loader                 [string]

Output options:
  --output, -o                  The output path and file for compilation assets
  --output-path                 The output directory as **absolute path**
                                (required).
                                       [string] [default: The current directory]
  --output-filename             Specifies the name of each output file on disk.
                                You must **not** specify an absolute path here!
                                The `output.path` option determines the location
                                on disk the files are written to, filename is
                                used solely for naming the individual files.
                                                   [string] [default: [name].js]
  --output-chunk-filename       The filename of non-entry chunks as relative
                                path inside the `output.path` directory.
       [string] [default: filename with [id] instead of [name] or [id] prefixed]
  --output-source-map-filename  The filename of the SourceMaps for the
                                JavaScript files. They are inside the
                                `output.path` directory.                [string]
  --output-public-path          The `publicPath` specifies the public URL
                                address of the output files when referenced in a
                                browser.                                [string]
  --output-jsonp-function       The JSONP function used by webpack for async
                                loading of chunks.                      [string]
  --output-pathinfo             Include comments with information about the
                                modules.                               [boolean]
  --output-library              Expose the exports of the entry point as library
                                                                         [array]
  --output-library-target       Type of library
         [string] [choices: "var", "assign", "this", "window", "self", "global",
      "commonjs", "commonjs2", "commonjs-module", "amd", "umd", "umd2", "jsonp"]

Advanced options:
  --records-input-path       Store compiler state to a json file.       [string]
  --records-output-path      Load compiler state from a json file.      [string]
  --records-path             Store/Load compiler state from/to a json file. This
                             will result in persistent ids of modules and
                             chunks. An absolute path is expected. `recordsPath`
                             is used for `recordsInputPath` and
                             `recordsOutputPath` if they left undefined.[string]
  --define                   Define any free var in the bundle          [string]
  --target                   Environment to build for                   [string]
  --cache                    Cache generated modules and chunks to improve
                             performance for multiple incremental builds.
                      [boolean] [default: It's enabled by default when watching]
  --watch-stdin, --stdin     Stop watching when stdin stream has ended [boolean]
  --watch-aggregate-timeout  Delay the rebuilt after the first change. Value is
                             a time in ms.                              [number]
  --watch-poll               Enable polling mode for watching           [string]
  --hot                      Enables Hot Module Replacement            [boolean]
  --prefetch                 Prefetch this request (Example: --prefetch
                             ./file.js)                                 [string]
  --provide                  Provide these modules as free vars in all modules
                             (Example: --provide jQuery=jquery)         [string]
  --labeled-modules          Enables labeled modules                   [boolean]
  --plugin                   Load this plugin                           [string]
  --bail                     Report the first error as a hard error instead of
                             tolerating it.            [boolean] [default: null]
  --profile                  Capture timing information for each module.
                                                       [boolean] [default: null]

Resolving options:
  --resolve-alias         Redirect module requests                      [string]
  --resolve-extensions    Redirect module requests                       [array]
  --resolve-loader-alias  Setup a loader alias for resolving            [string]

Optimizing options:
  --optimize-max-chunks      Try to keep the chunk count below a limit
  --optimize-min-chunk-size  Minimal size for the created chunk
  --optimize-minimize        Enable minimizing the output. Uses
                             optimization.minimizer.                   [boolean]

Stats options:
  --color, --colors               Force colors on the console
                                           [boolean] [default: (supports-color)]
  --no-color, --no-colors         Force no colors on the console       [boolean]
  --sort-modules-by               Sorts the modules list by property in module
                                                                        [string]
  --sort-chunks-by                Sorts the chunks list by property in chunk
                                                                        [string]
  --sort-assets-by                Sorts the assets list by property in asset
                                                                        [string]
  --hide-modules                  Hides info about modules             [boolean]
  --display-exclude               Exclude modules in the output         [string]
  --display-modules               Display even excluded modules in the output
                                                                       [boolean]
  --display-max-modules           Sets the maximum number of visible modules in
                                  output                                [number]
  --display-chunks                Display chunks in the output         [boolean]
  --display-entrypoints           Display entry points in the output   [boolean]
  --display-origins               Display origins of chunks in the output
                                                                       [boolean]
  --display-cached                Display also cached modules in the output
                                                                       [boolean]
  --display-cached-assets         Display also cached assets in the output
                                                                       [boolean]
  --display-reasons               Display reasons about module inclusion in the
                                  output                               [boolean]
  --display-depth                 Display distance from entry point for each
                                  module                               [boolean]
  --display-used-exports          Display information about used exports in
                                  modules (Tree Shaking)               [boolean]
  --display-provided-exports      Display information about exports provided
                                  from modules                         [boolean]
  --display-optimization-bailout  Display information about why optimization
                                  bailed out for modules               [boolean]
  --display-error-details         Display details about errors         [boolean]
  --display                       Select display preset
              [string] [choices: "", "verbose", "detailed", "normal", "minimal",
                                                          "errors-only", "none"]
  --verbose                       Show more details                    [boolean]
  --info-verbosity                Controls the output of lifecycle messaging
                                  e.g. Started watching files...
                 [string] [choices: "none", "info", "verbose"] [default: "info"]
  --build-delimiter               Display custom text after build output[string]

Options:
  --help, -h     Show help                                             [boolean]
  --version, -v  Show version number                                   [boolean]
  --silent       Prevent output from being displayed in stdout         [boolean]
  --json, -j     Prints the result as JSON.                            [boolean]
```

这个帮助看一下，之后有什么需要的再这么用。



然后去根据[首页](https://webpack.js.org)上的案例，去写一些文件吧

即先创建这两个文件src/index.js和src/bar.js



运行后查看输出结果

```
$ ./node_modules/.bin/webpack

Hash: 791fd58cce627185bc35
Version: webpack 4.39.2
Time: 247ms
Built at: 08/15/2019 10:24:31 AM
  Asset       Size  Chunks             Chunk Names
main.js  973 bytes       0  [emitted]  main
Entrypoint main = main.js
[0] ./src/index.js + 1 modules 93 bytes {0} [built]
    | ./src/index.js 32 bytes [built]
    | ./src/bar.js 61 bytes [built]

WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. 
Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/
```

会看到在根目录下，有一个目录dist生成了，然后里面有一个文件main.js。打开看一下发现几个在src目录下的代码文件都打包到一个文件里，而且代码也最小化了，并且都是你看不懂的代码。



之后要去看一下这个main.js到底好不好用。根据首页的教程提示，在根目录下新建一个page.html文件，在合适的位置引入这个文件`<script src="./dist/main.js"></script>`。用live server去在浏览器中运行这个html文件，在chrome控制台看一下输出结果。



默认情况的使用webpack我们已经知道了，那么下面看一下如何自己做一些配置。根据首页教程提示，创建文件webpack.config.js。

```js
// webpack.config.js
const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
}
```

首先path是node.js的[path模块](https://nodejs.org/dist/latest-v12.x/docs/api/path.html)。这是因为我们要用到文件路径相关功能。如output这里，我们需要找到这个目录的位置，[path.resolve([...paths])](https://nodejs.org/dist/latest-v12.x/docs/api/path.html#path_path_resolve_paths)这个看一下。

module.exports中的modules是node.js中的[module模块](https://nodejs.org/dist/latest-v12.x/docs/api/modules.html)，根据索引找`Modules - The module scope - The module Object - module.exports`，简单理解这个 {} 里面的内容将会作为webpack.config.js模块输出，如果想要在根目录下某个文件引入这个模块，就这样`const webpackConfigJs = require('./webpack.config.js')`。至于webpack如何使用这个模块，如何引用的，这个就要看webpack的代码了。

entry是入口的意思，即入口文件，比如a是入口文件，b加载到a文件上，那么webpack只需要这个通过这个a文件就可以知道其他的文件。

output是输出的意思，path是输出文件夹的位置，filename是输入文件的名字。

这里在回头看一下这个path.resolve()，和[__dirname](https://nodejs.org/dist/latest-v12.x/docs/api/modules.html#modules_dirname)，`Modules - The module scope - __dirname`，__dirname这输出的应该是绝对路径。webpack.config.js这个模块所在的目录名，这里是根目录路径名。path.resolve()会把这个两个路径解析成一个路径，就是我们需要的路径。





根据[安装教程](https://webpack.js.org/guides/installation/)， 我们添加这些代码在package.json里

```
// package.json
{
	"scripts": {
		"build": "webpack --config webpack.config.js"
	}
}
```

然后运行`npm run-script build`或者`npm run build`或者`npx webpack --config webpack.config.js`或者`./node_modules/.bin/webpack --config webpack.config.js`都可以



那么到这里，基本的安装和配置就完成了。


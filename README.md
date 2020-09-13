learn and take note


## Guides

### Asset Management

#### Setup

#### Loading CSS

don't view the page source, as it won't show you the result, because `<style> `tag is dynamically created  by JavaScript.

我感觉必须要再回头看一下浏览器的渲染原理。还有什么是page source?

on top of that 除此之外





## Concepts



### Loaders

```js
module.exports = {
    module: {
        rules: [
            { test: /\.css$/, use: 'css-loader' },
            { test: /\.ts$/, use: 'ts-loader' }
        ]
    }
}
```

#### Configuration

```js
module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader'},
                    { 
                        loader: 'css-loader', 
                        options: {
                            modules: true
                        }}
                    },
                    { loader: 'sass-loader' }
                ]
            }
        ]
    }
}
```

#### Inline

````js
import Styles from 'style-loader!css-loader?modules!./styles.css'
````



#### CLI

```js

```



### Plugins

#### Anatomy

```js
const pluginName = 'ConsoleLogOnBuildWebpackPlugin'

class ConsoleLogOnBuildWebpackPlugin {
    apply(compiler) {
        compiler.hooks.run.tap(pluginName, compilation => {
            console.log('The webpack build process is starting!!!')
        })
    }
}
```



### Configuration



### Modules

### Module Resolution

### Targets

#### Usage

```js
module.exports = {
    target: 'node'
}
```

#### Multiple Targets

````js
const path = require('path')
const serverConfig = {
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'lib.node.js'
    }
    // ...
}

const clientConfig = {
    target: 'web', // <=== can be omitted as default is 'web'
    output: {
        path: path.resolve(__dirname, 'dist'),
        filenmae: 'lib.js'
    }
    // ...
}

module.exports = [ serverConfig, clientConfig ]
````

> why this is an **array** rather than an **object** here? 



### The Manifest

#### Runtime

可以理解成处理逻辑的基础，方法构成

#### Manifest

显示，展示。

可以理解成，实际的逻辑关系。

#### The Problem

### Hot Module Replacement

### Why webpack




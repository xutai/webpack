



[babel - setup - build systems - webpack](https://babeljs.io/setup#installation)



#### 初始配置

在看`Docs - Guides - Usage Guide`时看到安装需要哪些包，即

```
npm install --save-dev @babel/core @babel/cli @babel/preset-env
npm install --save @babel/polyfill
```

然后去看`Docs - Usage - polyfill`，看到Babel 7.4.0就用`core-js/stable`和`regenerator-runtime/runtime`来代替`@babel/polyfill`。去看`Docs - Presets - env - useBuiltins`有提到我上面说的情况，推荐core-js要单独安装。我这里使用的是`core-js@3`安装的是`core-js^3.2.1`。并且在.babelrc里面配置一下corejs，我是这么配置的

##### 配置文件.babelrc 

```js
{
   "presets": [
       [
        "@babel/preset-env",
        {
            "useBuiltIns": "entry",
            "targets": {
                "ie": "8"
            },
            "corejs": {
                "version": 3,
                "proposals": true
            }
        }
       ]
   ]
}
```

这里使用的entry和import 'core-js'的组合，看文档意思是按需加载相应的core-js入口点。即需要什么就加载什么。

这里说一下usage这个。usage不需要自己引入core-js。babel会自动判断，如果目标环境支持则不加在，不支持则加载。然后一个bundle捆绑包只会加载相同的polyfill一次。

#### 测试

之前有尝试同时使用usage和import 'core-js'，结果给我这样的提示

```
  When setting `useBuiltIns: 'usage'`, polyfills are automatically imported when needed.
  Please remove the direct import of `core-js` or use `useBuiltIns: 'entry'` instead.
```





#### core-js

至于想要了解一下core-js里面有什么

查看core-js的文件夹，在node_modulesl里面，

##### 案例

这里我要使用的是ES2016的Array.prototype.includes()

在es/array里发现includes.js

在features里没有发现或者不知道那个是相关的

在internals里发现array-includes.js

在modules里发现es.array.includes.js

在proposals里没有发现或者不知道那个是相关的

在scripts里不知道没有

在stable/array里有includes.js

在statge里不知道

在web里不知道



#### 测试

如果使用`useBuiltin: entry`，并且在在src/index.js中使用开头加入这行代码`import 'core-js'`

bundle.js 128 KiB, IE11-9通过测试，IE8失败

或使用`useBuiltin: entry`和`import 'core-js/es/array/includes'`

bundle.js 9.3KiB, IE11-9通过测试，IE8失败

或使用`useBuiltin:  usage`

bundle.js 9.3 KiB, IE11-9通过测试，IE8失败




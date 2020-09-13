

it looks like the official docs is incorrect

>  test: require.resolve('index.js'),
error will output:
```
$ npx webpack
Cannot find module 'index.js'
Require stack:
- E:\webpack\webpack-practice\s19Shimming\s2GranularShimming\webpack.config.js
- E:\webpack\webpack-practice\s19Shimming\s2GranularShimming\node_modules\webpack-cli\bin\utils\convert-argv.js
- E:\webpack\webpack-practice\s19Shimming\s2GranularShimming\node_modules\webpack-cli\bin\cli.js
- E:\webpack\webpack-practice\s19Shimming\s2GranularShimming\node_modules\webpack\bin\webpack.js
```
so 
i correct it
>  test: require.resolve('./src/index.js'),
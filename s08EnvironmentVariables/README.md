



follow the docs, first of all, input in terminal
`npx webpack --env.NODE_ENV=local --env.production --progress`

you will see result like this 

```
$ npx webpack --env.NODE_ENV=local --env.production --progress
NODE_ENV:  local
Production:  true
Hash: efa736f38ed5873b784d
Version: webpack 4.39.2
Time: 239ms
Built at: 08/25/2019 11:33:46 AM
    Asset       Size  Chunks             Chunk Names
bundle.js  930 bytes       0  [emitted]  main
Entrypoint main = bundle.js
[0] ./src/index.js 4 bytes {0} [built]

WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/
```
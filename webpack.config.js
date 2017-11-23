const path = require('path');
const commonConfig = require("./webpack.common.config");

module.exports = Object.assign({}, commonConfig, {
    name: "webpack-typescript-tests-example",
    entry: "./src/main/index.tsx",
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "out")
    }
});
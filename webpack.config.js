const path = require('path');

module.exports = {
	name: "webpack-typescript-tests-example",
    entry: "./src/main/index.tsx",
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["*", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "out")
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            // and then fed through Babel to compiled from ES6 to ES5
            {
                test: /\.tsx?$/,
                loaders: [
                    {
                        loader: "awesome-typescript-loader",
                        options: {
                            useBabel: true,
                            useCache: true
                        }
                    }
                ],
                exclude: [/node_modules/]
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    }
}
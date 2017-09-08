const commonConfig = require("./webpack.common.config");

module.exports = Object.assign({}, commonConfig, {
	target: 'node', // in order to ignore built-in modules like path, fs, etc. 

    // Enzyme has some conditional requires for older versions of
    // React. Those paths won't actually be invoked, but Webpack
    // doesn't know that, so it tries to bundle in unneeded packages
    // that we don't have installed. These lines prevent that.
    externals: {        
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
    }
});
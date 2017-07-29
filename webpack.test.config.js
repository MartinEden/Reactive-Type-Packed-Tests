const commonConfig = require("./webpack.common.config");

module.exports = Object.assign({}, commonConfig, {
	target: 'node', // in order to ignore built-in modules like path, fs, etc. 
});
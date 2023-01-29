const path = require("path");
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')

module.exports = {
    entry: {
        popup: "./popup/joplin.js"
    },
    output: {
        path: path.resolve(__dirname, "addon"),
        filename: "[name]/index.js"
    },
    mode: "none",
    plugins: [
        new NodePolyfillPlugin()
    ],
    resolve: {
	    fallback: {
		    "fs": false,
		    "tls": false
	    }
    }
  
};



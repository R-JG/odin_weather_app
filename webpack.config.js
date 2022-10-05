const DotenvWebpackPlugin = require("dotenv-webpack");

module.exports = {
    mode: 'development',
    plugins: new DotenvWebpackPlugin(),
};
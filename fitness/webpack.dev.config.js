const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
       /*  contentBase: path.resolve(__dirname, '../dist'), */
      /*   devMiddleware: {
            publicPath: '/dist/'
          }, */
          static: {
            directory: path.join(__dirname, "./")
          },
          port: 3030,
          hot: "only"
    },
};

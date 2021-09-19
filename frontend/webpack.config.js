const { VueLoaderPlugin } = require('vue-loader');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const path = require('path');
const glob = require('glob')

let entries = {}
glob.sync("./src/*.js").map(function (key) {
    let name = key.split('/')[2].split('.')[0];
    entries[name] = key;
});

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  const plugins = [new VueLoaderPlugin(), new WebpackManifestPlugin()];
  return {
    mode: "development",
    entry: entries,
    output: {
      path: path.resolve(__dirname, './assets'),
      filename: isProduction ? '[name]-[contentHash].js' : '[name].js',
      publicPath: ""
    },
    watch: true,
    watchOptions: {
      aggregateTimeout: 200,
      poll: 1000
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.(css|sass|scss)$/,
          use: [
            'vue-style-loader',
            'css-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.(jpg|png|gif)$/,
          use: [{
            loader: 'file-loader',
            options: {
              outputPath: 'images',
              publicPath: 'assets/images',
              name: '[name].[ext]'
            }
          }]
        }
      ]
    },
    plugins,
    resolve: {
      alias: {
        'vue': 'vue/dist/vue.js'
      }
    },
    devServer: {
      contentBase: path.resolve(__dirname, './assets'),
      port: 3500,
      disableHostCheck: true,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
    }
  };
};

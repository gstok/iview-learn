const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  //入口js文件
  entry: path.join(__dirname, 'src', 'index'),
  
  //输出js文件
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },
  
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.scss$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "sass-loader" // compiles Sass to CSS
        }]
      },
      {
        test: /.js$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        exclude: [
          path.resolve(__dirname, 'node_modules'),
          path.resolve(__dirname, 'bower_components')
        ],
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        exclude: [
          path.resolve(__dirname, 'node_modules'),
          path.resolve(__dirname, 'bower_components')
        ],
        loader: 'vue-loader'
      },
      {
        test: /\.(png|jpg|jpeg|gif|eot|ttf|otf|woff|woff2|svg|svgz)(\?.+)?$/,
        loader: 'url-loader'
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.json', '.css', '.vue'],
    alias: {
      'vue': 'vue/dist/vue.js',
    }    
  },

  devtool: 'source-map',

  devServer: {
    //这个有什么作用还要详细了解
    //publicPath: path.join('/dist/'),

    //内容目录路径
    contentBase: path.join('dist'),
    //服务器端口
    port: 2048,
    //文件修改自动刷新浏览器
    inline: true
  },

  //插件
  plugins: [
    //html整合插件，负责生成包含目标js文件的html文件
    new HtmlWebpackPlugin({
        template: 'src/index.html',
        filename: 'index.html'
    })
  ]
};
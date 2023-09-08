const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const DotenvWebpackPlugin = require('dotenv-webpack');



  module.exports = {
    mode: process.env.NODE_ENV,
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "./public"),
      filename: "bundle.js",
    },
    module: {
      rules: [
        {
          test: /.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        },
        {
          test: /.(css|scss)$/,
          exclude: [/node_modules/, /client\/stylesheets\/modules/],
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.ttf$/,
          use: [
            {
              loader: 'ttf-loader',
              options: {
                name: './font/[hash].[ext]',
              },
            },
          ]
        }, 
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[hash].[ext]',
                outputPath: 'static'
              }
            },
          ],
        },
        {
          test: /\.mp3$/,
          use: {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'static'
            }
          },
        },
        {
          test: /\.(ico)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'static', 
            },
          }
        }
      ],
    },
    
    devServer: {
      host: "localhost",
      port: 8080,
      // match the output path
      static: {
        directory: path.resolve(__dirname, "public"),
        // match the output 'publicPath'
        publicPath: "/",
      },
      // enable HMR on the devServer
      hot: true,
      historyApiFallback: true,
      headers: { "Access-Control-Allow-Origin": "*" },
      proxy: {
        "/api": {
          target: "http://localhost:3000",
          secure: false,
        },
        "/static": {
          target: "http://localhost:3000",
          secure: false,
        },
        "/public": {
          target: "http://localhost:3000",
          secure: false,
        },
      },
    },

    plugins: [
      new HtmlWebpackPlugin({ template: "./public/index.html" }),
      new DotenvWebpackPlugin()
      // new CompressionWebpackPlugin({
      //   algorithm: 'gzip',
      //   test: /\.(js|css|html|svg)$/,
      //   threshold: 10240,
      //   minRatio: 0.8,
      //   deleteOriginalAssets: false,
      // }),
    ],
  
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin()],
    },
  };    
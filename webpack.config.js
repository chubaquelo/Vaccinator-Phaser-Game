const path = require('path');
// I have to import this plugin module to use is as plugin and then as rule.
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  watch: true,
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    // publicPath is needed for file-loader to work (bug)
    publicPath: '',
  },
  // minicssplugin must be called here, to be able to use is as rules
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        // Here we have selector for css, sass, scss.. goes first on sass-loader and at the end MiniCssExtract
        // is putting the file in public folder.. MiniCssExtract can be replaced with style-loader for inline.
        test: /\.s?[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        // File-loader: [folder] is setting same folder name in /dist as in /src. Instead of [sha...] could
        // use [name] to give it the same name.
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[folder]/[sha512:hash:base64:7].[ext]',
            },
          },
        ],
      },
      // {
      //   test: /\.(png|jpg)$/,
      //   use: "file-loader",
      //   // options: {
      //   //   name: "[path][name].[ext]",
      //   // },
      //   // include: path.join(__dirname, "src"),
      // },
    ],
  },
};

const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: './main-file.js',
  devServer: {
    proxy: {
    '/api': {
      pathRewrite: { '^/api' : '' },
      target: 'http://localhost:3000'
    }
  }
},
  mode: 'development',
  module: {
  rules: [
    {
      loader: ['vue-style-loader', 'css-loader'],
      test: /\.css$/
    },
    {
      loader: 'vue-loader',
      test: /\.vue$/
    },
    {
      loader: 'file-loader',
      test: /\.(gif|jpe?g|png|svg)$/
    }
  ],
},
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public'
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js',
      vue$: 'vue/dist/vue.esm.js'
    }
  }
}

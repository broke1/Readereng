const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname,'dist'),
        publicPath: 'dist'
    },
    devServer: {
        overlay: true
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: '/node_modules/'
        },{
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loader: {
                    sass: 'vue-style-loader!css-loader!sass-loader'
                }
            },
        },{
            test: /\.css$/,
            use: [
                'style-loader',
                MiniCssExtractPlugin.loader,
                {
                    loader: "css-loader",
                },
                {
                    loader: "postcss-loader",
                    options: {  config: {path: path.resolve(__dirname,'src/js/postcss.config.js')}  }
                },
              
            ],
        },  {
            test: /\.sass$/,
            use: [
                'style-loader',
                MiniCssExtractPlugin.loader,
                {
                    loader: "css-loader",
                },
                {
                    loader: "postcss-loader",
                    options: {  config: {path: './src/js/postcss.config.js'}  }
                },
                {
                    loader: "sass-loader",
                   
                },
            ],
        }

 
    
    ]
    },
    resolve: {
        alias: {
            "vue$" : "vue/dist/vue.js"
        }
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
          filename: '[name].css',
        }),
      ],
}
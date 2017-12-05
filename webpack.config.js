module.exports = {
    entry: ['./src/App.js'],
    output:{
        path:'./',
        filename:'bundle.js'
    },
    module:{
        loaders:[{
            test:/\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    },
    devServer:{
        contentBase: './public',
        color:true,
        historyApiFallback: true,
        inline: true
    }
};
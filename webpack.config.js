const path = require('path');

module.exports = {
    mode: 'development',
    target: 'node',
    entry: {
        main: path.resolve(__dirname, 'src','index.js')
    },
    output:{
        path: path.resolve(__dirname, 'dist')
    },
    module:{
        rules:[
            {
                test: /\.js$/, 
                exclude: /node_modules/, 
                use:{
                    loader: 'babel-loader',
                    options: {
                        presets: ['env'],
                        plugins: [
                            'transform-es2015-destructuring', 
                            'transform-object-rest-spread'
                        ]
                      }
                }
            }
        ]
    }
}
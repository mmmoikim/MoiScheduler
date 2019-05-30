const commonModule = {
    rules: [{
            test: /\.js/,
            exclude: /(node_modules)/,
            use: [{
                loader: 'babel-loader'
            }]
        },
        {
            test: /\.vue$/,
            loader: 'vue-loader'
        },
        {
            test: /\.css$/,
            oneOf: [
                // this matches `<style module>`
                {
                    resourceQuery: /module/,
                    use: [
                        'vue-style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                localIdentName: '[name]---[local]---[hash:base64:5]'
                            }
                        }
                    ]
                },
                // this matches plain `<style>` or `<style scoped>`
                {
                    use: [
                        'vue-style-loader',
                        'css-loader'
                    ]
                }
            ]
        },
        {
            test: /\.scss$/,
            oneOf: [{
                    resourceQuery: /module/,
                    use: [
                        'vue-style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                localIdentName: '[name]__[local]__[hash:base64:5]',

                            }
                        },
                        'sass-loader'
                    ]
                },
                {
                    use: [
                        'vue-style-loader',
                        'css-loader',
                        'sass-loader'
                    ]
                }
            ]
        }
    ]
};

module.exports = commonModule;
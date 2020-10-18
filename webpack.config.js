const path = require("path")
const VueLoaderPlugin = require("vue-loader/lib/plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, "./public"),
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.resolve(__dirname, "public"),
        open: true
    },
    devtool: process.env.NODE_ENV === "production" ? false : "source-map",
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_module/
            },
            {
                test: /\.ts$/,
                use: [{
                    loader: "ts-loader",
                    options: {
                        appendTsSuffixTo: [/\.vue$/]
                    }
                }],
                exclude: /node_module/
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.styl(us)?$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "stylus-loader"]
            }
        ]
    },
    resolve: {
        extensions: [".js", ".ts", ".vue"],
        alias: {
            "vue$": "vue/dist/vue.esm.js",
            "@": path.resolve(__dirname, "src")
        }
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: "bundle.css"
        })
    ]
}

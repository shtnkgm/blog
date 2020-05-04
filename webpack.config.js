module.exports = {
    // モード値を production に設定すると最適化された状態で、
    // development に設定するとソースマップ有効でJSファイルが出力される
    mode: 'development',

    // メインとなるJavaScriptファイル（エントリーポイント）
    entry: './src/main.ts',
    // ファイルの出力設定
    output: {
        //  出力ファイルのディレクトリ名
        path: `${__dirname}/dist`,
        // 出力ファイル名
        filename: "main.js"
    },
    module: {
        rules: [{
            test: /\.ts$/,
            use: 'ts-loader'
        }, ],
    },
    resolve: {
        extensions: ['.ts'],
        // Webpackで利用するときの設定
        alias: {
            vue: "vue/dist/vue.js"
        },
    },
};
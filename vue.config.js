module.exports = {
  outputDir: "docs",
  assetsDir: "./",
  publicPath: "./",
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.mjs$/,
          include: /node_modules/,
          type: "javascript/auto",
        },
      ],
    },
  },
}

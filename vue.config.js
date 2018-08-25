module.exports = {
  runtimeCompiler: true,
  devServer: {
    proxy: "https://www.google.com/complete/search?output=search&client=chrome&"
  },
  productionSourceMap: true
};

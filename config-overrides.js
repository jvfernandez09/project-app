const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias,
} = require('customize-cra')
const path = require("path")

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': 'blue' },
  }),
  addWebpackAlias({
    "package": path.resolve(__dirname, "package.json"),
    "assets": path.resolve(__dirname, "src/assets"),
    "utils": path.resolve(__dirname, "src/utils"),
    "reducer": path.resolve(__dirname, "src/reducer"),
    "lib": path.resolve(__dirname, "src/lib"),
    "containers": path.resolve(__dirname, "src/containers"),
    "app": path.resolve(__dirname, "src/containers/app"),
  })
)

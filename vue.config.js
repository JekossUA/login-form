const path = require("path");
module.exports = {
  chainWebpack: config => {
    config.resolve.alias.set("@", path.resolve(__dirname, "src"));
    //   .set("@enums", path.resolve(__dirname, "src/enums"))
    //   .set("@components", path.resolve(__dirname, "src/components"));
  }
};

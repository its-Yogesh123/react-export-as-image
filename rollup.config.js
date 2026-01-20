const resolve = require("@rollup/plugin-node-resolve");

module.exports = {
  input: "src/index.js",
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
      exports: "named"
    },
    {
      file: "dist/index.esm.js",
      format: "esm"
    }
  ],
  external: ["react"],
  plugins: [resolve()]
};

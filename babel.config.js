// // eslint-disable-next-line import/prefer-default-export
// export const presets = [
//   ["@babel/preset-env", { targets: { node: "current" } }],
//   "@babel/preset-typescript",
// ];
module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    ["@babel/preset-typescript"],
  ],
};

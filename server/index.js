require("ignore-styles");

require("@babel/register")({
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: [
    ["babel-plugin-styled-components"],
    [
      "transform-assets",
      {
        extensions: ["css", "svg", "png", "gif"],
        name: "static/media/[name].[hash:8].[ext]",
      },
    ],
  ],
});

require("./server");

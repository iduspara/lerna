const { merge } = require("webpack-merge");
const workingDir = process.cwd();
const pkg = require(`${workingDir}/package.json`);
const path = require("path");

let config = {
  entry: "./src/index.tsx",
  output: {
    filename: `${pkg.name}-${pkg.version}.js`,
    path: path.resolve(workingDir, "dist"),
    clean: true,
  },
  //   externals: {
  //   // Don't bundle react or react-dom
  //   react: {
  //     commonjs: "react",
  //     commonjs2: "react",
  //     amd: "React",
  //     root: "React",
  //   },
  //   "react-dom": {
  //     commonjs: "react-dom",
  //     commonjs2: "react-dom",
  //     amd: "ReactDOM",
  //     root: "ReactDOM",
  //   },
  // },
  resolve: { extensions: [".js", ".jsx", ".tsx", ".ts"] },

  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        loader: "babel-loader",
        options: {
          presets: [
            "@babel/env",
            "@babel/preset-react",
            "@babel/preset-typescript",
          ],
        },
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: require.resolve("postcss-loader"),
            options: {
              implementation: require.resolve("postcss"),
              postcssOptions: {
                plugins: [require("tailwindcss"), require("autoprefixer")],
              },
            },
          },
        ],
      },
    ],
  },
};

module.exports = (env_vars) => {
  const fs = require("fs");
  const path = require("path");
  const webpackFile = path.resolve(workingDir, `./webpack/webpack.config.js`);

  if (!fs.existsSync(webpackFile)) {
    console.error(`File ${webpackFile} does not exist`);
  } else {
    const env_configuration = require(webpackFile);
    config = merge(config, env_configuration);
  }

  return config;
};

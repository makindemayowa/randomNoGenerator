const config = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: true
        }
      }
    ],
    [
      "@babel/preset-react",
      {
        development: process.env.BABEL_ENV === "development"
      }
    ]
  ],
  plugins: ["@babel/plugin-proposal-class-properties"],
  ignore: ["node_modules"]
};

module.exports = config;

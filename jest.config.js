const config = {
  bail: true,
  verbose: true,
  globals: {
    NODE_ENV: "test"
  },
  moduleFileExtensions: ["js", "jsx"],
  moduleNameMapper: {
    "\\.(css|scss|less)$": "<rootDir>/styleMock.js"
  },
  setupFiles: ["<rootDir>/setup.js"]
};

module.exports = config;

module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/no-babel",
  moduleFileExtensions: ["js", "ts", "json", "vue"],
  transform: {
    "^.+\\.ts$": "ts-jest",
    "^.+\\.vue$": "@vue/vue3-jest",
  },
  globals: {
    "vue-jest": {
      // this will automatically stub all components from vue-router
      experimentalMockTsx: false,
      mockCssModules: false,
    },
  },
  testEnvironment: "jsdom",
};

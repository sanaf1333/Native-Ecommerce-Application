module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: true,
      },
    ],
    [
      "module-resolver",
      {
        alias: {
          // This needs to be mirrored in tsconfig.json
          components: "./src/components",
          utils: "./src/utils",
          services: "./src/services",
          containers: "./src/containers",
          hooks: "./src/hooks",
          modals: "./src/modals"
        },
      },
    ],
],
};

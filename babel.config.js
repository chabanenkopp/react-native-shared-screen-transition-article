module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src/'],
        alias: {
          '@constants': ['./src/constants'],
        },
        extensions: ['.ios.js', '.android.js', '.js', '.json', '.ts', '.tsx'],
      },
    ],
    [
      '@tamagui/babel-plugin',
      {
        components: ['tamagui'],
        config: './tamagui.config.ts',
      },
    ],
    'react-native-reanimated/plugin',
  ],
};

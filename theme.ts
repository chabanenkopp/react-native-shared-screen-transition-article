import {config} from '@tamagui/config';
import {createTokens} from 'tamagui';

export const tokens = createTokens({
  ...config.tokens,
  color: {
    ...config.tokens.color,
    white: '#FFFFFF',
    white2: '#f2f1f6',
    white3: '#f7f7f7',
    white4: '#dfdfdf',
    gray1Dark: '#636578',
    black: '#000000',
  },
});

const light = {
  ...config.themes.light,
  background: tokens.color.white,
  color: tokens.color.black,
};

const allThemes = {
  light,
};

type BaseTheme = typeof light;
type ThemeName = keyof typeof allThemes;

type Themes = {
  [key in ThemeName]: BaseTheme;
};

export const themes: Themes = allThemes;

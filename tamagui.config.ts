import {config} from '@tamagui/config';
import {createTamagui} from 'tamagui';
import {themes, tokens} from './theme';

const tamagui = createTamagui({
  ...config,
  tokens,
  themes,
});

// this makes typescript properly type everything based on the config
type Conf = typeof tamagui;
declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}

export default tamagui;

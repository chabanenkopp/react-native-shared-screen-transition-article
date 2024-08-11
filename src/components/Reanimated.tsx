import Animated from 'react-native-reanimated';
import {Image, View, ScrollView} from 'tamagui';

export const Reanimated = {
  View: Animated.createAnimatedComponent(View),
  Image: Animated.createAnimatedComponent(Image),
  ScrollView: Animated.createAnimatedComponent(ScrollView),
};

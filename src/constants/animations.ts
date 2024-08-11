import {Easing, FadeIn, FadeInDown} from 'react-native-reanimated';

export const EASING = Easing.in(Easing.bezierFn(0.5, 0.82, 0.24, 0.75));

export const ImageCarouselFadeIn = FadeIn.duration(200)
  .delay(250)
  .easing(EASING);

export const FadeToUp = FadeInDown.duration(200).delay(250).easing(EASING);

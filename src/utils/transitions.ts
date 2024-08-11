import {SharedTransition, withTiming} from 'react-native-reanimated';
import {EASING} from 'constants/animations';

export const getSharedImageTransition = (duration = 200) =>
  SharedTransition.custom(values => {
    'worklet';
    return {
      width: withTiming(values.targetWidth, {
        duration,
        easing: EASING,
      }),
      height: withTiming(values.targetHeight, {
        duration,
        easing: EASING,
      }),
      originX: withTiming(values.targetOriginX, {
        duration,
        easing: EASING,
      }),
      originY: withTiming(values.targetOriginY, {
        duration,
        easing: EASING,
      }),
    };
  });

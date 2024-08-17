import React from 'react';
import {useWindowDimensions} from 'react-native';
import {
  interpolate,
  Extrapolation,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {Reanimated} from 'components/Reanimated';

type DashProps = {
  color: string;
  pageIndex: number;
  x: SharedValue<number>;
};

export const Dash = ({x, pageIndex, color}: DashProps) => {
  const {width: screenWidth} = useWindowDimensions();

  const animatedDotStyle = useAnimatedStyle(() => {
    const inputRange = [
      (pageIndex - 1) * screenWidth,
      pageIndex * screenWidth,
      (pageIndex + 1) * screenWidth,
    ];

    return {
      width: interpolate(
        x.value,
        inputRange,
        [10, 20, 10],
        Extrapolation.CLAMP,
      ),
      opacity: interpolate(
        x.value,
        inputRange,
        [0.5, 1, 0.5],
        Extrapolation.CLAMP,
      ),
    };
  });

  return (
    <Reanimated.View
      h={10}
      br={5}
      bg={color}
      mx={10}
      style={animatedDotStyle}
    />
  );
};

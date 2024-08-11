import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated';

type UseParallaxHeaderProps = {
  imageHeight: number;
};

export const useParallaxImage = ({imageHeight}: UseParallaxHeaderProps) => {
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);

  const rImageStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-imageHeight, 0, imageHeight],
            [-imageHeight / 2, 0, imageHeight * 0.75],
          ),
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-imageHeight, 0, imageHeight],
            [2, 1, 1],
          ),
        },
      ],
    };
  });

  return {scrollRef, rImageStyle};
};

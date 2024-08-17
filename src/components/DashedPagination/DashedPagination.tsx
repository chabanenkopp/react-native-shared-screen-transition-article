import React from 'react';
import {StackProps, XStack} from 'tamagui';
import {
  SharedValue,
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import {Dash} from './Dash';

interface DashedPaginationProps extends StackProps {
  color: string;
  data: any[];
  xValue: SharedValue<number>;
}

export const DashedPagination = ({
  data,
  color,
  xValue,
  ...props
}: DashedPaginationProps) => {
  return (
    <XStack h={40} ai="center" jc="center" {...props}>
      {data.map((_, i) => {
        return <Dash key={i} pageIndex={i} x={xValue} color={color} />;
      })}
    </XStack>
  );
};

export const usePagination = () => {
  const x = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler({
    onScroll: event => {
      x.value = event.contentOffset.x;
    },
  });

  return {x, onScroll};
};

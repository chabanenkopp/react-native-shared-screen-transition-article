import {StackProps, Text, YStack, useTheme} from 'tamagui';
import {transparentize} from 'polished';

interface StatusLabelProps extends StackProps {
  status: string;
}

export const StatusLabel = ({status, ...props}: StatusLabelProps) => {
  const theme = useTheme();

  return (
    <YStack
      ai="center"
      als="flex-start"
      br={8}
      bg={transparentize(0.2, theme.white2.val)}
      px={12}
      py={2}
      {...props}>
      <Text fos={12} col="$gray1Dark">
        {status}
      </Text>
    </YStack>
  );
};

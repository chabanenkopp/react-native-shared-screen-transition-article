import {StackProps, YStack, useTheme} from 'tamagui';
import {transparentize} from 'polished';
import {getSharedImageTransition} from 'utils/transitions';
import {getSharedTransitionTag} from 'utils/getSharedTransitionTag';
import {Reanimated} from 'components/Reanimated';
import {StatusLabel} from './StatusLabel';
import {ContentSnapshot} from './ContentSnapshot';

interface PostCardProps extends StackProps {
  status: string;
  content: string;
  images: string[];
}

export const PostCard = ({
  id,
  images,
  status,
  content,
  ...props
}: PostCardProps) => {
  const theme = useTheme();

  const tags = getSharedTransitionTag(id!);
  const transition = getSharedImageTransition(250);

  return (
    <YStack
      w={290}
      h={340}
      bw={1}
      br={25}
      boc={transparentize(0.6, theme.white4.val)}
      bg="$white"
      pressStyle={{opacity: 0.65}}
      {...props}>
      <StatusLabel status={status} mx={15} my={20} />

      <Reanimated.Image
        source={{
          uri: images[0],
          cache: 'force-cache',
        }}
        w={254}
        h={210}
        als="center"
        br={18}
        sharedTransitionTag={tags.post}
        sharedTransitionStyle={transition}
      />

      <ContentSnapshot px={15} py={10}>
        {content}
      </ContentSnapshot>
    </YStack>
  );
};

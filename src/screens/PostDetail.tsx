import React from 'react';
import Animated from 'react-native-reanimated';
import {useWindowDimensions} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Image, Text, View, YStack, useTheme} from 'tamagui';
import {useParallaxImage} from 'utils/useParallaxImage';
import {getSharedImageTransition} from 'utils/transitions';
import {getSharedTransitionTag} from 'utils/getSharedTransitionTag';
import {Routes, RootDrawerParamList} from 'routes/constants';
import {FadeToUp, ImageCarouselFadeIn} from 'constants/animations';
import {StatusBar} from 'components/StatusBar';
import {Reanimated} from 'components/Reanimated';
import {
  DashedPagination,
  usePagination,
} from 'components/DashedPagination/DashedPagination';
import {StatusLabel} from 'components/PostCard/StatusLabel';

type PostDetailProps = NativeStackScreenProps<
  RootDrawerParamList,
  Routes.PostDetail
>;

const PANEL_OFFSET = 45;
const IMAGE_HEIGHT = 340;

export const PostDetail = ({route}: PostDetailProps) => {
  const {post} = route?.params ?? {};

  const theme = useTheme();
  const {width: screenWidth} = useWindowDimensions();

  const {x, onScroll} = usePagination();
  const {scrollRef, rImageStyle} = useParallaxImage({
    imageHeight: IMAGE_HEIGHT,
  });

  const isOneImage = post.images.length === 1;
  const tags = getSharedTransitionTag(post.id);
  const transition = getSharedImageTransition(250);

  return (
    <>
      <StatusBar />

      <YStack f={1} bg="$white3">
        <Reanimated.Image
          source={{
            uri: post.images[0],
            cache: 'force-cache',
          }}
          w="100%"
          h={IMAGE_HEIGHT}
          als="center"
          pos="absolute"
          br={16}
          sharedTransitionTag={tags.post}
          sharedTransitionStyle={transition}
        />

        <Reanimated.ScrollView
          ref={scrollRef}
          w="100%"
          h="100%"
          mb={-PANEL_OFFSET}
          contentContainerStyle={{
            paddingBottom: 120,
          }}
          scrollEventThrottle={16}>
          <Animated.FlatList
            data={post.images}
            renderItem={({item}) => (
              <Image
                source={{
                  uri: item,
                  cache: 'force-cache',
                }}
                width={screenWidth}
                height={IMAGE_HEIGHT}
              />
            )}
            onScroll={onScroll}
            style={rImageStyle}
            entering={ImageCarouselFadeIn}
            bounces={false}
            horizontal={true}
            pagingEnabled={true}
            scrollEventThrottle={16}
            keyExtractor={item => item}
            showsHorizontalScrollIndicator={false}
          />

          <Reanimated.View
            entering={FadeToUp}
            f={1}
            fg={1}
            t={-PANEL_OFFSET}
            btlr={12}
            btrr={12}>
            {!isOneImage && (
              <DashedPagination
                xValue={x}
                data={post.images}
                color={theme.white.val}
              />
            )}

            <View bg="$white3" px={15} pt={25}>
              <YStack h={'100%'} bg="$white" br={16} p={15} mt={10}>
                <Text fos={20} numberOfLines={2} ta="center">
                  {post.title}
                </Text>

                <StatusLabel status={post.status} als="center" mt={20} />

                <Text fos={16} lh={24} mt={20}>
                  {post.content}
                </Text>
              </YStack>
            </View>
          </Reanimated.View>
        </Reanimated.ScrollView>
      </YStack>
    </>
  );
};

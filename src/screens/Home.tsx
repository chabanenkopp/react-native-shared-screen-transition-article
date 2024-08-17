import React from 'react';
import {FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Text, Stack, ScrollView, useTheme} from 'tamagui';
import {Routes, RootDrawerParamList} from 'routes/constants';
import {SCREEN_OFFSET_X, TestData} from 'constants/constants';
import {StatusBar} from 'components/StatusBar';
import {PostCard} from 'components/PostCard/PostCard';

type HomeProps = NativeStackScreenProps<RootDrawerParamList, Routes.Home>;

export const Home = ({navigation}: HomeProps) => {
  const theme = useTheme();

  return (
    <>
      <StatusBar barStyle="dark-content" />

      <SafeAreaView style={{flex: 1, backgroundColor: theme.white3.val}}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            paddingTop: 30,
            paddingBottom: 120,
          }}>
          <Text fos={24} ml={SCREEN_OFFSET_X} mb={25}>
            Cars
          </Text>

          <FlatList
            data={TestData}
            renderItem={({item}) => (
              <PostCard
                onPress={() => {
                  navigation.navigate(Routes.PostDetail, {
                    post: item,
                  });
                }}
                {...item}
              />
            )}
            ItemSeparatorComponent={() => <Stack w={15} />}
            keyExtractor={item => String(item.id)}
            horizontal
            onEndReachedThreshold={0.5}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: SCREEN_OFFSET_X,
            }}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

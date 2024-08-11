import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from 'screens/Home';
import {PostDetail} from 'screens/PostDetail';
import {Routes, RootDrawerParamList} from './constants';
import {useTheme} from 'tamagui';

const Stack = createNativeStackNavigator<RootDrawerParamList>();

export const HomeStack = () => {
  const theme = useTheme();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.Home}
        component={Home}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={Routes.PostDetail}
        component={PostDetail}
        options={{
          title: '',
          animation: 'none',
          gestureEnabled: false,
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTintColor: theme.white.val,
        }}
      />
    </Stack.Navigator>
  );
};

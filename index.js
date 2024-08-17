import React from 'react';
import {TamaguiProvider} from 'tamagui';
import {AppRegistry} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import App from './src/App';
import config from './tamagui.config';
import {name as appName} from './app.json';

const ScreenTransitionsApp = () => (
  <NavigationContainer>
    <GestureHandlerRootView style={{flex: 1}}>
      <TamaguiProvider config={config} defaultTheme="light">
        <App />
      </TamaguiProvider>
    </GestureHandlerRootView>
  </NavigationContainer>
);

AppRegistry.registerComponent(appName, () => ScreenTransitionsApp);

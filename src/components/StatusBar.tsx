import React from 'react';
import {StackProps, useTheme} from 'tamagui';
import {StatusBar as NativeStatusBar, StatusBarStyle} from 'react-native';
import {IS_ANDROID} from 'constants/constants';

interface StatusBarProps extends StackProps {
  statusbarColor?: string;
  barStyle?: StatusBarStyle;
}

export const StatusBar = ({
  barStyle = 'light-content',
  statusbarColor,
}: StatusBarProps) => {
  const theme = useTheme();

  return (
    <NativeStatusBar
      translucent={true}
      barStyle={IS_ANDROID ? 'light-content' : barStyle}
      backgroundColor={statusbarColor ?? theme.white.val}
    />
  );
};

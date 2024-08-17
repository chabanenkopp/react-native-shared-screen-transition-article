import React from 'react';
import {PropsWithChildren} from 'react';
import {Text, TextProps} from 'tamagui';

export const ContentSnapshot = (props: PropsWithChildren<TextProps>) => (
  <Text numberOfLines={2} fos={16} lh={20} {...props} />
);

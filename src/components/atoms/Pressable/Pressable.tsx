import React from 'react';
import { Pressable as PressableBase } from 'react-native';
import { mergePressableStyles } from './utils';
import type { TPressableProps } from './Pressable.types';

export const Pressable = ({ style, pressStyle, ...props }: TPressableProps) => (
  <PressableBase style={mergePressableStyles(style, pressStyle)} {...props} />
);

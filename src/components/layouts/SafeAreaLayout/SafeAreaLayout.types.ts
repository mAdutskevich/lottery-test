import type { ReactNode } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import type { EdgeInsets } from 'react-native-safe-area-context';

export type TSafeAreaLayoutProps = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
};

export type TContainerStyled = {
  insets: EdgeInsets;
};

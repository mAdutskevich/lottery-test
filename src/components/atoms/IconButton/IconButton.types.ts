import type { ReactNode } from 'react';
import type { StyleProp, ViewStyle, PressableProps } from 'react-native';

export type TIconButtonProps = PressableProps & {
  icon: ReactNode;
  style?: StyleProp<ViewStyle>;
};

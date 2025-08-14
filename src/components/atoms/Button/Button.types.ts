import type { StyleProp, ViewStyle, PressableProps } from 'react-native';

export type TButtonProps = PressableProps & {
  text: string;
  style?: StyleProp<ViewStyle>;
};

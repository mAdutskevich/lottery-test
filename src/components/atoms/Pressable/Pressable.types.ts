import type { StyleProp, ViewStyle, PressableProps } from 'react-native';

export type TPressableProps = PressableProps & {
  style?: StyleProp<ViewStyle>;
  pressStyle?: ViewStyle;
};

export type TMergePressableStylesFn = (
  style?: StyleProp<ViewStyle>,
  pressStyle?: ViewStyle,
) => PressableProps['style'];

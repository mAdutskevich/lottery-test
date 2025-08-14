import type {
  StyleProp,
  ViewStyle,
  TextStyle,
  PressableProps,
} from 'react-native';

export enum EButtonVariant {
  PRIMARY = 'primary',
  OUTLINED = 'outlined',
}

export type TButtonProps = PressableProps & {
  text: string;
  variant?: EButtonVariant;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

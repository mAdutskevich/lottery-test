import { Pressable, Text } from 'react-native';
import { styles } from './Button.styled';
import { EButtonVariant, type TButtonProps } from './Button.types';

export const Button = ({
  text,
  variant = EButtonVariant.PRIMARY,
  style,
  textStyle,
  ...props
}: TButtonProps) => (
  <Pressable
    style={({ pressed }) => [
      styles.pressable,
      variant === EButtonVariant.OUTLINED ? styles.outlined : styles.primary,
      style,
      pressed && styles.pressed,
    ]}
    {...props}
  >
    <Text
      style={[
        styles.text,
        variant === EButtonVariant.OUTLINED
          ? styles.outlinedText
          : styles.primaryText,
        textStyle,
      ]}
    >
      {text}
    </Text>
  </Pressable>
);

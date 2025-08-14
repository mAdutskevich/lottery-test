import { Pressable, Text } from 'react-native';
import { styles } from './Button.styled';
import type { TButtonProps } from './Button.types';

export const Button = ({ text, style, ...props }: TButtonProps) => (
  <Pressable
    style={({ pressed }) => [
      styles.pressable,
      style,
      pressed && styles.pressed,
    ]}
    {...props}
  >
    <Text style={styles.text}>{text}</Text>
  </Pressable>
);

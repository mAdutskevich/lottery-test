import { Pressable, Text } from './Button.styled';
import type { TButtonProps } from './Button.types';

export const Button = ({ text, disabled, style, ...props }: TButtonProps) => (
  <Pressable style={style} disabled={!!disabled} {...props}>
    <Text>{text}</Text>
  </Pressable>
);

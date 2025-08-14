import { Pressable } from 'react-native';
import { styles } from './IconButton.styled';
import type { TIconButtonProps } from './IconButton.types';

export const IconButton = ({ icon, style, ...props }: TIconButtonProps) => (
  <Pressable style={[styles.pressable, style]} {...props}>
    {icon}
  </Pressable>
);

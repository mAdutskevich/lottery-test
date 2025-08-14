import { Pressable } from './IconButton.styled';
import type { TIconButtonProps } from './IconButton.types';

export const IconButton = ({ icon, style, ...props }: TIconButtonProps) => (
  <Pressable style={style} {...props}>
    {icon}
  </Pressable>
);

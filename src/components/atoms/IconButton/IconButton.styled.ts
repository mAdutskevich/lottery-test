import { styled } from 'styled-components/native';
import { Pressable as PressableBase } from '../Pressable';

export const Pressable = styled(PressableBase).attrs(({ onPress }) => ({
  // Styles when entity is pressed. Check details here: https://github.com/styled-components/styled-components/issues/3228#issuecomment-676514716
  // Check time to time if Pressable appear to support pressStyle prop natively
  pressStyle: {
    opacity: onPress ? 0.7 : 1,
  },
}))`
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

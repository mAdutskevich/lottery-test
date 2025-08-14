import { styled } from 'styled-components/native';
import { horizontalScale } from 'src/utils';
import { Pressable as PressableBase } from '../Pressable';

const BUTTON_HEIGHT = 44;

export const Pressable = styled(PressableBase).attrs(({ onPress }) => ({
  // Styles when entity is pressed. Check details here: https://github.com/styled-components/styled-components/issues/3228#issuecomment-676514716
  // Check time to time if Pressable appear to support pressStyle prop natively
  pressStyle: {
    opacity: onPress ? 0.85 : 1,
  },
}))`
  height: ${() => horizontalScale(BUTTON_HEIGHT)}px;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) =>
    horizontalScale(theme.attributes.borderRadius.s8)}px;
  background-color: ${({ theme }) => theme.palette.PRIMARY};
`;

export const Text = styled.Text`
  font-size: ${({ theme }) => horizontalScale(theme.typography.size.s18)}px;
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  color: ${({ theme }) => theme.palette.SECONDARY};
`;

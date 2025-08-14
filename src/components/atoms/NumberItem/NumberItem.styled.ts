import { styled } from 'styled-components/native';
import { horizontalScale } from 'src/utils';
import { Pressable as PressableBase } from '../Pressable';
import type {
  TPressableStyled,
  TInnerBorderContainerStyled,
} from './NumberItem.types';

const NUMBER_HEIGHT = 48;
const INNER_CONTAINER_HEIGHT = 36;

export const Pressable = styled(PressableBase).attrs(({ onPress }) => ({
  // Styles when entity is pressed. Check details here: https://github.com/styled-components/styled-components/issues/3228#issuecomment-676514716
  // Check time to time if Pressable appear to support pressStyle prop natively
  pressStyle: {
    opacity: onPress ? 0.85 : 1,
  },
}))<TPressableStyled>`
  height: ${() => horizontalScale(NUMBER_HEIGHT)}px;
  width: ${() => horizontalScale(NUMBER_HEIGHT)}px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border-width: ${({ theme }) =>
    horizontalScale(theme.attributes.borderWidth.s4)}px;
  border-color: ${({ theme, noBorder }) =>
    noBorder ? theme.palette.WHITE : theme.palette.PRIMARY};
  background-color: ${({ theme }) => theme.palette.WHITE};
`;

export const InnerBorderContainer = styled.View<TInnerBorderContainerStyled>`
  height: ${() => horizontalScale(INNER_CONTAINER_HEIGHT)}px;
  width: ${() => horizontalScale(INNER_CONTAINER_HEIGHT)}px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border-width: ${({ theme }) =>
    horizontalScale(theme.attributes.borderWidth.s2)}px;
  border-color: ${({ theme, noBorder }) =>
    noBorder ? theme.palette.WHITE : theme.palette.PRIMARY};
`;

export const Text = styled.Text`
  font-size: ${({ theme }) => horizontalScale(theme.typography.size.s18)}px;
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  color: ${({ theme }) => theme.palette.BLACK};
`;

import { styled } from 'styled-components/native';
import { horizontalScale } from 'src/utils';
import { Pressable as PressableBase } from 'src/components/atoms';
import type { TContainerStyled } from './Combination.types';

const COMBINATION_CONTAINER_HEIGHT = 68;

export const Container = styled.View<TContainerStyled>`
  height: ${() => horizontalScale(COMBINATION_CONTAINER_HEIGHT)}px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: ${({ theme }) =>
    horizontalScale(theme.attributes.borderRadius.s16)}px;
  border-width: ${({ theme }) =>
    horizontalScale(theme.attributes.borderWidth.s2)}px;
  border-color: ${({ theme, noBorder }) =>
    noBorder ? 'transparent' : theme.palette.PRIMARY};
  background-color: ${({ theme }) => theme.palette.WHITE}30;
  padding: ${({ theme }) => horizontalScale(theme.spacing.s16)}px;
`;

export const RemoveButtonPressable = styled(PressableBase).attrs(
  ({ onPress }) => ({
    // Styles when entity is pressed. Check details here: https://github.com/styled-components/styled-components/issues/3228#issuecomment-676514716
    // Check time to time if Pressable appear to support pressStyle prop natively
    pressStyle: {
      opacity: onPress ? 0.85 : 1,
    },
  }),
)`
  position: absolute;
  top: -${({ theme }) => horizontalScale(theme.spacing.s12)}px;
  right: -${({ theme }) => horizontalScale(theme.spacing.s12)}px;
  height: ${({ theme }) => horizontalScale(theme.spacing.s24)}px;
  width: ${({ theme }) => horizontalScale(theme.spacing.s24)}px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border-width: ${({ theme }) => theme.attributes.borderWidth.s2}px;
  border-color: ${({ theme }) => theme.palette.PRIMARY};
  background-color: ${({ theme }) => theme.palette.WHITE};
`;

import styled from 'styled-components/native';
import {
  IconButton as IconButtonBase,
  SafeAreaLayout as SafeAreaLayoutBase,
} from 'src/components';
import { horizontalScale } from 'src/utils';
import type { TContentStyled } from './PlayCombinations.types';

export const SafeAreaLayout = styled(SafeAreaLayoutBase)`
  background-color: ${({ theme }) => theme.palette.PRIMARY};
  padding-bottom: 0;
`;

export const Content = styled.View<TContentStyled>`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.SECONDARY};
  border-top-left-radius: ${({ theme }) =>
    horizontalScale(theme.attributes.borderRadius.s20)}px;
  border-top-right-radius: ${({ theme }) =>
    horizontalScale(theme.attributes.borderRadius.s20)}px;
  padding: ${({ theme, insets }) =>
    `${theme.spacing.s20}px ${theme.spacing.s16}px ${insets.bottom}px`};
`;

export const IconButton = styled(IconButtonBase)`
  width: ${({ theme }) => horizontalScale(theme.spacing.s48)}px;
  height: ${({ theme }) => horizontalScale(theme.spacing.s48)}px;
  border-width: ${({ theme }) =>
    horizontalScale(theme.attributes.borderWidth.s2)}px;
  border-color: ${({ theme }) => theme.palette.PRIMARY};
`;

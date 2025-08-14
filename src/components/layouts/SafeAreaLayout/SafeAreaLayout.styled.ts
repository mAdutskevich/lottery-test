import styled from 'styled-components/native';
import type { TContainerStyled } from './SafeAreaLayout.types';

export const Container = styled.View<TContainerStyled>`
  flex: 1;
  padding-top: ${({ insets }) => insets.top}px;
  padding-bottom: ${({ insets }) => insets.bottom}px;
  padding-left: ${({ insets }) => insets.left}px;
  padding-right: ${({ insets }) => insets.right}px;
`;

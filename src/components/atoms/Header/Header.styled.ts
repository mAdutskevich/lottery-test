import { Image } from 'expo-image';
import styled from 'styled-components/native';
import { verticalScale, horizontalScale } from 'src/utils';

const HEADER_HEIGHT = 142;

const LADY_IMAGE_WIDTH = 113;
const LADY_IMAGE_HEIGHT = 122;

const LOTTO_IMAGE_WIDTH = 75;
const LOTTO_IMAGE_HEIGHT = 51;

export const Container = styled.View`
  position: relative;
  height: ${() => verticalScale(HEADER_HEIGHT)}px;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const Text = styled.Text`
  font-size: ${({ theme }) => horizontalScale(theme.typography.size.s22)}px;
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  color: ${({ theme }) => theme.palette.WHITE};
  margin-bottom: ${({ theme }) => theme.spacing.s12}px;
  margin-right: ${({ theme }) => horizontalScale(theme.spacing.s20)}px;
`;

export const PersonImage = styled(Image)`
  position: absolute;
  bottom: 0;
  left: ${({ theme }) => horizontalScale(theme.spacing.s20)}px;
  width: ${() => verticalScale(LADY_IMAGE_WIDTH)}px;
  height: ${() => verticalScale(LADY_IMAGE_HEIGHT)}px;
`;

export const LottoImage = styled(Image)`
  position: absolute;
  top: ${({ theme }) => verticalScale(theme.spacing.s20)}px;
  right: ${({ theme }) => horizontalScale(theme.spacing.s20)}px;
  width: ${() => verticalScale(LOTTO_IMAGE_WIDTH)}px;
  height: ${() => verticalScale(LOTTO_IMAGE_HEIGHT)}px;
`;

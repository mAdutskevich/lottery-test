import { StyleSheet } from 'react-native';
import { theme } from '../../../themes';
import { horizontalScale, verticalScale } from '../../../utils';

const HEADER_HEIGHT = 142;
const LADY_IMAGE_WIDTH = 113;
const LADY_IMAGE_HEIGHT = 122;
const LOTTO_IMAGE_WIDTH = 75;
const LOTTO_IMAGE_HEIGHT = 51;

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: verticalScale(HEADER_HEIGHT),
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  text: {
    fontSize: horizontalScale(theme.typography.size.s22),
    fontWeight: 'bold',
    color: theme.palette.WHITE,
    marginBottom: theme.spacing.s12,
    marginRight: horizontalScale(theme.spacing.s20),
  },
  personImage: {
    position: 'absolute',
    bottom: 0,
    left: horizontalScale(theme.spacing.s20),
    width: verticalScale(LADY_IMAGE_WIDTH),
    height: verticalScale(LADY_IMAGE_HEIGHT),
  },
  lottoImage: {
    position: 'absolute',
    top: verticalScale(theme.spacing.s20),
    right: horizontalScale(theme.spacing.s20),
    width: verticalScale(LOTTO_IMAGE_WIDTH),
    height: verticalScale(LOTTO_IMAGE_HEIGHT),
  },
});

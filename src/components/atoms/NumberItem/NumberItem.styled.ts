import { StyleSheet } from 'react-native';
import { theme } from '../../../themes';
import { horizontalScale } from '../../../utils';

const NUMBER_HEIGHT = 48;
const INNER_CONTAINER_HEIGHT = 36;

export const styles = StyleSheet.create({
  pressable: {
    height: horizontalScale(NUMBER_HEIGHT),
    width: horizontalScale(NUMBER_HEIGHT),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    backgroundColor: theme.palette.WHITE,
    borderWidth: horizontalScale(theme.attributes.borderWidth.s4),
    borderColor: theme.palette.PRIMARY,
  },
  noBorder: {
    borderColor: theme.palette.WHITE,
  },
  innerBorderContainer: {
    height: horizontalScale(INNER_CONTAINER_HEIGHT),
    width: horizontalScale(INNER_CONTAINER_HEIGHT),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    borderWidth: horizontalScale(theme.attributes.borderWidth.s2),
    borderColor: theme.palette.PRIMARY,
  },
  text: {
    fontSize: horizontalScale(theme.typography.size.s18),
    fontWeight: 'bold',
    color: theme.palette.BLACK,
  },
});

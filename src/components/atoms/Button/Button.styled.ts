import { StyleSheet } from 'react-native';
import { theme } from '../../../themes';
import { horizontalScale } from '../../../utils';

const BUTTON_HEIGHT = 44;

export const styles = StyleSheet.create({
  pressable: {
    height: horizontalScale(BUTTON_HEIGHT),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: horizontalScale(8),
    backgroundColor: theme.palette.PRIMARY,
  },
  text: {
    fontSize: horizontalScale(theme.typography.size.s18),
    fontWeight: 'bold',
    color: theme.palette.SECONDARY,
  },
});

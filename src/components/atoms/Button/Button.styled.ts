import { StyleSheet } from 'react-native';
import { theme } from '../../../themes';
import { horizontalScale } from '../../../utils';

export const BUTTON_HEIGHT = 44;

export const styles = StyleSheet.create({
  pressable: {
    height: horizontalScale(BUTTON_HEIGHT),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: horizontalScale(8),
    borderWidth: horizontalScale(theme.attributes.borderWidth.s2),
  },
  pressed: {
    opacity: 0.85,
  },
  primary: {
    backgroundColor: theme.palette.PRIMARY,
    borderColor: theme.palette.PRIMARY,
  },
  outlined: {
    backgroundColor: 'transparent',
    borderColor: theme.palette.PRIMARY,
  },
  text: {
    fontSize: horizontalScale(theme.typography.size.s18),
    fontWeight: 'bold',
  },
  outlinedText: {
    color: theme.palette.WHITE,
  },
  primaryText: {
    color: theme.palette.SECONDARY,
  },
});

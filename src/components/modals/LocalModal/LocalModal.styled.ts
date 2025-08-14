import { StyleSheet } from 'react-native';
import { theme } from '../../../themes';
import { horizontalScale } from '../../../utils';
import type { TFontWeight } from '../../../types';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: `${theme.palette.BLACK}45`,
  },
  pressable: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  content: {
    width: '80%',
    padding: horizontalScale(theme.spacing.s16),
    borderRadius: theme.attributes.borderRadius.s16,
    backgroundColor: theme.palette.WHITE,
  },
  title: {
    color: theme.palette.BLACK,
    fontWeight: theme.typography.weight.bold as TFontWeight,
    textAlign: 'center',
    fontSize: horizontalScale(theme.typography.size.s18),
  },
  description: {
    color: theme.palette.BLACK,
    textAlign: 'center',
    fontSize: horizontalScale(theme.typography.size.s16),
    marginTop: horizontalScale(theme.spacing.s12),
  },
  button: {
    width: '100%',
    marginTop: horizontalScale(theme.spacing.s16),
  },
});

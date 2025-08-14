import { StyleSheet } from 'react-native';
import { horizontalScale } from '../../../utils';
import { theme } from '../../../themes';

export const styles = StyleSheet.create({
  safeAreaLayout: {
    backgroundColor: theme.palette.PRIMARY,
    paddingBottom: 0,
  },
  content: {
    flex: 1,
    backgroundColor: theme.palette.SECONDARY,
    borderTopLeftRadius: horizontalScale(theme.attributes.borderRadius.s20),
    borderTopRightRadius: horizontalScale(theme.attributes.borderRadius.s20),
    paddingTop: horizontalScale(theme.spacing.s20),
    paddingRight: horizontalScale(theme.spacing.s16),
    paddingLeft: horizontalScale(theme.spacing.s16),
  },
  iconButton: {
    width: horizontalScale(theme.spacing.s48),
    height: horizontalScale(theme.spacing.s48),
    borderWidth: horizontalScale(theme.attributes.borderWidth.s2),
    borderColor: theme.palette.PRIMARY,
  },
});

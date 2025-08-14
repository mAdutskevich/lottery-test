import { StyleSheet } from 'react-native';
import { theme } from '../../../themes';
import { horizontalScale } from '../../../utils';

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
    paddingTop: horizontalScale(theme.spacing.s12),
  },
  scrollViewContainer: {
    flex: 1,
    padding: horizontalScale(theme.spacing.s16),
  },
  scrollViewBorder: {
    paddingHorizontal: horizontalScale(theme.spacing.s16),
    backgroundColor: `${theme.palette.WHITE}25`,
    borderColor: theme.palette.PRIMARY,
    borderRadius: horizontalScale(theme.attributes.borderRadius.s20),
    borderWidth: horizontalScale(theme.attributes.borderWidth.s2),
  },
  scrollView: {
    paddingVertical: horizontalScale(theme.spacing.s16),
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: horizontalScale(theme.spacing.s16),
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: horizontalScale(theme.spacing.s16),
    paddingHorizontal: horizontalScale(theme.spacing.s16),
    paddingBottom: horizontalScale(theme.spacing.s16),
  },
  cancelButton: {
    flex: 1,
    backgroundColor: 'transparent',
    borderColor: theme.palette.PRIMARY,
    borderWidth: horizontalScale(theme.attributes.borderWidth.s2),
  },
  button: {
    flex: 1,
  },
});

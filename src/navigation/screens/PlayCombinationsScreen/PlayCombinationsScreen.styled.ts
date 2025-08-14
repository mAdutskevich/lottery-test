import { StyleSheet } from 'react-native';
import { theme } from '../../../themes';
import type { TFontWeight } from '../../../types';
import { BUTTON_HEIGHT } from '../../../components';
import { horizontalScale, verticalScale } from '../../../utils';

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
  scrollView: {
    gap: horizontalScale(theme.spacing.s16),
    paddingTop: horizontalScale(theme.spacing.s16),
    paddingLeft: horizontalScale(theme.spacing.s16),
    paddingRight: horizontalScale(theme.spacing.s16),
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(theme.spacing.s16),
  },
  emptyTitle: {
    color: theme.palette.WHITE,
    fontWeight: theme.typography.weight.bold as TFontWeight,
    fontSize: horizontalScale(theme.typography.size.s20),
    textAlign: 'center',
  },
  emptyText: {
    marginTop: verticalScale(theme.spacing.s12),
    color: theme.palette.WHITE,
    fontWeight: theme.typography.weight.regular as TFontWeight,
    fontSize: horizontalScale(theme.typography.size.s18),
    textAlign: 'center',
  },
  iconButton: {
    position: 'absolute',
    top: -(horizontalScale(BUTTON_HEIGHT) + verticalScale(theme.spacing.s20)),
    right: horizontalScale(theme.spacing.s16),
    width: horizontalScale(theme.spacing.s48),
    height: horizontalScale(theme.spacing.s48),
    borderWidth: horizontalScale(theme.attributes.borderWidth.s2),
    borderColor: theme.palette.PRIMARY,
  },
  buttonsContainer: {
    position: 'relative',
    padding: horizontalScale(theme.spacing.s16),
  },
  modalCombinationsContainer: {
    width: '100%',
    marginTop: horizontalScale(theme.spacing.s12),
    justifyContent: 'flex-start',
  },
  modalCombination: {
    padding: 0,
  },
});

import { StyleSheet } from 'react-native';
import { theme } from '../../../themes';
import { horizontalScale } from '../../../utils';

const COMBINATION_CONTAINER_HEIGHT = 68;

export const styles = StyleSheet.create({
  container: {
    height: horizontalScale(COMBINATION_CONTAINER_HEIGHT),
    width: '100%',
    padding: horizontalScale(theme.spacing.s16),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: horizontalScale(theme.attributes.borderRadius.s16),
    borderWidth: horizontalScale(theme.attributes.borderWidth.s2),
    borderColor: theme.palette.PRIMARY,
    backgroundColor: `${theme.palette.WHITE}30`,
  },
  noBorder: {
    borderColor: 'transparent',
    backgroundColor: 'transparent',
  },
  removeButtonPressable: {
    position: 'absolute',
    top: -horizontalScale(theme.spacing.s12),
    right: -horizontalScale(theme.spacing.s12),
    height: horizontalScale(theme.spacing.s24),
    width: horizontalScale(theme.spacing.s24),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    borderWidth: theme.attributes.borderWidth.s2,
    borderColor: theme.palette.PRIMARY,
    backgroundColor: theme.palette.WHITE,
  },
});

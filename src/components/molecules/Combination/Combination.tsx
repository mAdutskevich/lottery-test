import { Pressable, View } from 'react-native';
import { Close } from '../../../assets';
import { theme } from '../../../themes';
import { NumberItem } from '../../atoms';
import { horizontalScale } from '../../../utils';
import { styles } from './Combination.styled';
import type { TCombinationProps } from './Combination.types';

export const Combination = ({
  combination,
  noBorder = false,
  withRemoveButton = false,
  onRemove,
}: TCombinationProps) => (
  <View style={[styles.container, noBorder && styles.noBorder]}>
    {combination.map((item, index) => (
      <NumberItem key={index} text="66" />
    ))}

    {withRemoveButton && (
      <Pressable style={[styles.removeButtonPressable]} onPress={onRemove}>
        <Close
          width={horizontalScale(theme.spacing.s16)}
          height={horizontalScale(theme.spacing.s16)}
          stroke={theme.palette.SECONDARY}
        />
      </Pressable>
    )}
  </View>
);

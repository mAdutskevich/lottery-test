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
  onNumberPress,
  onRemove,
  style,
}: TCombinationProps) => (
  <View style={[styles.container, noBorder && styles.noBorder, style]}>
    {combination.map((item, index) => (
      <NumberItem
        key={index}
        text={item}
        onPress={() => onNumberPress?.(index)}
      />
    ))}

    {withRemoveButton && (
      <Pressable
        style={({ pressed }) => [
          styles.removeButtonPressable,
          pressed && styles.pressed,
        ]}
        onPress={onRemove}
      >
        <Close
          width={horizontalScale(theme.spacing.s16)}
          height={horizontalScale(theme.spacing.s16)}
          stroke={theme.palette.SECONDARY}
        />
      </Pressable>
    )}
  </View>
);

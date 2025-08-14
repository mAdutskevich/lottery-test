import type { StyleProp, ViewStyle } from 'react-native';

export type TCombinationProps = {
  combination: string[];
  noBorder?: boolean;
  withRemoveButton?: boolean;
  onNumberPress?: (index: number) => void;
  onRemove?: () => void;
  style?: StyleProp<ViewStyle>;
};

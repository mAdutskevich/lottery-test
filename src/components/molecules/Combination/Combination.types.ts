export type TCombinationProps = {
  combination: string[];
  noBorder?: boolean;
  withRemoveButton?: boolean;
  onNumberPress?: (index: number) => void;
  onRemove?: () => void;
};

import { useTheme } from 'styled-components/native';
import { Close } from 'src/assets';
import { horizontalScale } from 'src/utils';
import { NumberItem } from 'src/components/atoms';
import type { TCombinationProps } from './Combination.types';
import { Container, RemoveButtonPressable } from './Combination.styled';

export const Combination = ({
  combination,
  noBorder = false,
  withRemoveButton = false,
  onRemove,
}: TCombinationProps) => {
  const theme = useTheme();

  return (
    <Container noBorder={noBorder}>
      {combination.map((item, index) => {
        return <NumberItem key={index} text="66" />;
      })}

      {withRemoveButton && (
        <RemoveButtonPressable onPress={onRemove}>
          <Close
            width={horizontalScale(theme.spacing.s16)}
            height={horizontalScale(theme.spacing.s16)}
            stroke={theme.palette.SECONDARY}
          />
        </RemoveButtonPressable>
      )}
    </Container>
  );
};

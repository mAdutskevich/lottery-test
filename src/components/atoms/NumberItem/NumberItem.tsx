import { InnerBorderContainer, Pressable, Text } from './NumberItem.styled';
import type { TNumberItemProps } from './NumberItem.types';

export const NumberItem = ({
  text,
  onPress,
  noBorder = false,
}: TNumberItemProps) => {
  return (
    <Pressable onPress={onPress} noBorder={noBorder}>
      <InnerBorderContainer noBorder={noBorder}>
        {!!text && <Text>{String(text)}</Text>}
      </InnerBorderContainer>
    </Pressable>
  );
};

import { Pressable, Text, View } from 'react-native';
import { styles } from './NumberItem.styled';
import type { TNumberItemProps } from './NumberItem.types';

export const NumberItem = ({
  text,
  onPress,
  noBorder = false,
}: TNumberItemProps) => (
  <Pressable
    style={[styles.pressable, noBorder && styles.noBorder]}
    onPress={onPress}
  >
    <View style={[styles.innerBorderContainer, noBorder && styles.noBorder]}>
      {!!text && <Text style={styles.text}>{String(text)}</Text>}
    </View>
  </Pressable>
);

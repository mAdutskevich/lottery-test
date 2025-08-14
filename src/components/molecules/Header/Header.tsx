import { Image } from 'expo-image';
import { Text, View } from 'react-native';
import { styles } from './Header.styled';
import type { THeaderProps } from './Header.types';

export const Header = ({ title }: THeaderProps) => (
  <View style={styles.container}>
    <Image
      style={styles.personImage}
      source={{
        uri: 'https://raw.githubusercontent.com/mAdutskevich/lottery-test/eea563e4d621e2e1eb279ef4f69dcc42176157e0/src/assets/png/lady.png',
      }}
      contentFit="cover"
    />

    <Image
      style={styles.lottoImage}
      source={{
        uri: 'https://raw.githubusercontent.com/mAdutskevich/lottery-test/eea563e4d621e2e1eb279ef4f69dcc42176157e0/src/assets/png/lottoLogo.png',
      }}
      contentFit="cover"
    />

    <Text style={styles.text}>{title}</Text>
  </View>
);

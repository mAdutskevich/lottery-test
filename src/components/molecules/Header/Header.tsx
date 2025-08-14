import { Image } from 'expo-image';
import { Text, View } from 'react-native';
import { LadyImage, LottoLogoImage } from '../../../assets';
import { styles } from './Header.styled';
import type { THeaderProps } from './Header.types';

export const Header = ({ title }: THeaderProps) => (
  <View style={styles.container}>
    <Image style={styles.personImage} source={LadyImage} contentFit="cover" />

    <Image
      style={styles.lottoImage}
      source={LottoLogoImage}
      contentFit="cover"
    />

    <Text style={styles.text}>{title}</Text>
  </View>
);

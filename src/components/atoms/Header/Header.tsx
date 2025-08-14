import { LadyImage, LottoLogoImage } from 'src/assets';
import type { THeaderProps } from './Header.types';
import { Container, LottoImage, PersonImage, Text } from './Header.styled';

export const Header = ({ title }: THeaderProps) => (
  <Container>
    <PersonImage source={LadyImage} contentFit="cover" />

    <LottoImage source={LottoLogoImage} contentFit="cover" />

    <Text>{title}</Text>
  </Container>
);

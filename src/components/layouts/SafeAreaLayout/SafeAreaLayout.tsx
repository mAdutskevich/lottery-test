import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Container } from './SafeAreaLayout.styled';
import type { TSafeAreaLayoutProps } from './SafeAreaLayout.types';

export const SafeAreaLayout = ({ children, style }: TSafeAreaLayoutProps) => {
  const insets = useSafeAreaInsets();

  return (
    <Container style={style} insets={insets}>
      {children}
    </Container>
  );
};

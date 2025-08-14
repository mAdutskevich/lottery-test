import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from './SafeAreaLayout.styled';
import type { TSafeAreaLayoutProps } from './SafeAreaLayout.types';

export const SafeAreaLayout = ({ children, style }: TSafeAreaLayoutProps) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

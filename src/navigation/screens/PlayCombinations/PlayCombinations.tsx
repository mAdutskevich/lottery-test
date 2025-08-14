import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Plus } from '../../../assets';
import { theme } from '../../../themes';
import {
  Button,
  Header,
  IconButton,
  NumberItem,
  Combination,
  SafeAreaLayout,
} from '../../../components';
import { horizontalScale } from '../../../utils';
import { styles } from './PlayCombinations.styled';

export const PlayCombinations = () => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaLayout style={styles.safeAreaLayout}>
      <Header title="Your Combinations" />

      <View
        style={{
          ...styles.content,
          paddingBottom: insets.bottom,
        }}
      >
        <Button
          text="Purchase"
          onPress={() => {
            console.log('Button Pressed');
          }}
        />

        <NumberItem text="66" onPress={() => console.log('Number 1 Pressed')} />

        <Combination
          combination={['1', '66', '73', '45', '28']}
          onRemove={() => console.log('Remove Combination')}
        />

        <IconButton
          style={styles.iconButton}
          icon={
            <Plus
              fill={theme.palette.WHITE}
              width={horizontalScale(theme.spacing.s40)}
              height={horizontalScale(theme.spacing.s40)}
            />
          }
          onPress={() => console.log('Icon Button Pressed')}
        />
      </View>
    </SafeAreaLayout>
  );
};

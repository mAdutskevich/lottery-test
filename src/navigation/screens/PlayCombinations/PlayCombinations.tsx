import { ScrollView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  Button,
  Header,
  IconButton,
  Combination,
  SafeAreaLayout,
} from '../../../components';
import { Plus } from '../../../assets';
import { theme } from '../../../themes';
import { horizontalScale } from '../../../utils';
import { useCombinationsStore } from '../../../store';
import { EStackNavigationScreens } from '../../../enums';
import { TStackNavigationParamList } from '../../../types';
import { styles } from './PlayCombinations.styled';

export const PlayCombinations = () => {
  const insets = useSafeAreaInsets();
  const navigation =
    useNavigation<StackNavigationProp<TStackNavigationParamList>>();
  const { combinations, removeCombination } = useCombinationsStore();

  return (
    <SafeAreaLayout style={styles.safeAreaLayout}>
      <Header title="Your Combinations" />

      <View
        style={{
          ...styles.content,
          paddingBottom: insets.bottom,
        }}
      >
        <ScrollView contentContainerStyle={styles.scrollView}>
          {combinations.map((combination, index) => {
            return (
              <Combination
                key={index}
                withRemoveButton
                combination={combination}
                onRemove={() => removeCombination(index)}
              />
            );
          })}
        </ScrollView>

        <View style={styles.buttonsContainer}>
          <IconButton
            style={styles.iconButton}
            icon={
              <Plus
                fill={theme.palette.WHITE}
                width={horizontalScale(theme.spacing.s40)}
                height={horizontalScale(theme.spacing.s40)}
              />
            }
            onPress={() =>
              navigation.navigate(EStackNavigationScreens.NumberPicker)
            }
          />

          <Button
            text="Purchase"
            onPress={() => {
              console.log('Button Pressed');
            }}
          />
        </View>
      </View>
    </SafeAreaLayout>
  );
};

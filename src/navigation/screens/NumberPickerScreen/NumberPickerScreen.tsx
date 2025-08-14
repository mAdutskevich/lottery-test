import { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  Button,
  Header,
  NumberItem,
  Combination,
  SafeAreaLayout,
  EButtonVariant,
} from '../../../components';
import { useCombinationsStore } from '../../../store';
import { MAX_AMOUNT_OF_COMBINATIONS } from '../../../constants';
import type { TCombination, TStackNavigationParamList } from '../../../types';
import { useGetNumbers } from './hooks';
import { styles } from './NumberPickerScreen.styled';

const EMPTY_COMBINATION: TCombination = ['', '', '', '', ''];

export const NumberPickerScreen = () => {
  const insets = useSafeAreaInsets();
  const navigation =
    useNavigation<StackNavigationProp<TStackNavigationParamList>>();

  const [selectedCombination, setSelectedCombination] =
    useState<TCombination>(EMPTY_COMBINATION);

  const { numbers } = useGetNumbers();

  const handleSelectedNumberPress = (combinationIndex: number) => {
    const newCombination: TCombination = [...selectedCombination];

    const combinationNumber = newCombination[combinationIndex];

    if (combinationNumber) {
      newCombination[combinationIndex] = '';

      setSelectedCombination(newCombination);
    }
  };

  return (
    <SafeAreaLayout style={styles.safeAreaLayout}>
      <Header title="Pick 5 numbers" />

      <View
        style={{
          ...styles.content,
          flex: 1,
          flexDirection: 'column',
          paddingBottom: insets.bottom,
        }}
      >
        <Combination
          combination={selectedCombination}
          noBorder
          onNumberPress={handleSelectedNumberPress}
        />

        <View style={styles.scrollViewContainer}>
          <View style={styles.scrollViewBorder}>
            <ScrollView
              contentContainerStyle={styles.scrollView}
              showsVerticalScrollIndicator={false}
            >
              {numbers.map(number => {
                const isSelected = selectedCombination.includes(number);

                const handleSelectNumber = () => {
                  const newCombination: TCombination = [...selectedCombination];

                  console.log('handleSelectNumber', isSelected);

                  if (isSelected) {
                    // clear the number in combination if selected
                    const selectedIndex = newCombination.indexOf(number);

                    console.log('Selected index:', selectedIndex);

                    newCombination.splice(selectedIndex, 1, '');
                  } else {
                    // add the number to the first empty slot in the combination
                    const emptyIndex = newCombination.findIndex(
                      item => item === '',
                    );

                    if (emptyIndex === -1) {
                      // TODO: Show a message that the combination is full
                      console.log('Combination is full');

                      return;
                    }

                    newCombination.splice(emptyIndex, 1, number);
                  }

                  setSelectedCombination(newCombination);
                };

                return (
                  <NumberItem
                    key={number}
                    text={number}
                    noBorder={!isSelected}
                    onPress={handleSelectNumber}
                  />
                );
              })}
            </ScrollView>
          </View>
        </View>

        <View style={styles.buttonsContainer}>
          <Button
            variant={EButtonVariant.OUTLINED}
            style={styles.cancelButton}
            text="Cancel"
            onPress={() => navigation.goBack()}
          />

          <Button
            text="Add"
            style={styles.button}
            onPress={() => {
              if (selectedCombination.includes('')) {
                // TODO: Show a message to select all 5 numbers
                console.log('Please select all 5 numbers');

                return;
              }

              const combinations = useCombinationsStore.getState().combinations;
              const addCombination =
                useCombinationsStore.getState().addCombination;

              if (combinations.length >= MAX_AMOUNT_OF_COMBINATIONS) {
                // TODO: Show a message that the max amount of combinations is reached
                console.log('Maximum amount of combinations reached');

                return;
              }

              addCombination(selectedCombination);
              setSelectedCombination(EMPTY_COMBINATION);

              navigation.goBack();
            }}
          />
        </View>
      </View>
    </SafeAreaLayout>
  );
};

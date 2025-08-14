import { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  Button,
  Header,
  LocalModal,
  NumberItem,
  Combination,
  SafeAreaLayout,
  EButtonVariant,
} from '../../../components';
import { useCombinationsStore } from '../../../store';
import {
  EMPTY_COMBINATION,
  MAX_AMOUNT_OF_COMBINATIONS,
} from '../../../constants';
import type { TCombination, TStackNavigationParamList } from '../../../types';
import { useGetNumbers } from './hooks';
import { styles } from './NumberPickerScreen.styled';
import { EMPTY_MODAL_STATUS } from './NumberPickerScreen.constants';

export const NumberPickerScreen = () => {
  const insets = useSafeAreaInsets();
  const navigation =
    useNavigation<StackNavigationProp<TStackNavigationParamList>>();

  const [modalStatus, setModalStatus] = useState(EMPTY_MODAL_STATUS);

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

  const onModalClose = () => setModalStatus(EMPTY_MODAL_STATUS);

  return (
    <>
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
                    const newCombination: TCombination = [
                      ...selectedCombination,
                    ];

                    if (isSelected) {
                      // clear the number in combination if selected
                      const selectedIndex = newCombination.indexOf(number);

                      newCombination.splice(selectedIndex, 1, '');
                    } else {
                      // add the number to the first empty slot in the combination
                      const emptyIndex = newCombination.findIndex(
                        item => item === '',
                      );

                      if (emptyIndex === -1) {
                        setModalStatus({
                          isModalVisible: true,
                          title: 'Combination is full',
                          description:
                            'Please deselect a number before adding a new one.',
                        });

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
              text="Play"
              style={styles.button}
              onPress={() => {
                if (selectedCombination.includes('')) {
                  setModalStatus({
                    isModalVisible: true,
                    title: 'Incomplete Combination',
                    description: 'Please select all 5 numbers.',
                  });

                  return;
                }

                const combinations =
                  useCombinationsStore.getState().combinations;
                const addCombination =
                  useCombinationsStore.getState().addCombination;

                const isCombinationExists = combinations.some(
                  combination =>
                    combination.join('') === selectedCombination.join(''),
                );

                if (isCombinationExists) {
                  setModalStatus({
                    isModalVisible: true,
                    title: 'Combination Exists',
                    description: 'This combination has already been added.',
                  });

                  return;
                }

                const isCombinationsLimitReached =
                  combinations.length >= MAX_AMOUNT_OF_COMBINATIONS;

                if (isCombinationsLimitReached) {
                  setModalStatus({
                    isModalVisible: true,
                    title: 'Max Combinations Reached',
                    description: 'You cannot add more combinations.',
                  });

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

      <LocalModal
        title={modalStatus.title}
        description={modalStatus.description}
        visible={modalStatus.isModalVisible}
        positiveButtonText="Ok"
        onPositiveCallback={onModalClose}
        onClose={onModalClose}
      />
    </>
  );
};

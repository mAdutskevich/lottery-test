import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { type Dispatch, type SetStateAction, useState } from 'react';
import type {
  TCombination,
  TStackNavigationParamList,
} from '../../../../types';
import {
  EMPTY_COMBINATION,
  MAX_AMOUNT_OF_COMBINATIONS,
} from '../../../../constants';
import { useCombinationsStore } from '../../../../store';
import type { TModalStatus } from '../NumberPickerScreen.types';

export const useManageCombination = (
  setModalStatus: Dispatch<SetStateAction<TModalStatus>>,
) => {
  const navigation =
    useNavigation<StackNavigationProp<TStackNavigationParamList>>();

  const [selectedCombination, setSelectedCombination] =
    useState<TCombination>(EMPTY_COMBINATION);

  const handlePlay = () => {
    const isCombinationFull = selectedCombination.includes('');

    if (isCombinationFull) {
      setModalStatus({
        isModalVisible: true,
        title: 'Incomplete Combination',
        description: 'Please select all 5 numbers.',
      });

      return;
    }

    const combinations = useCombinationsStore.getState().combinations;
    const addCombination = useCombinationsStore.getState().addCombination;
    const isCombinationExists = combinations.some(
      combination => combination.join('') === selectedCombination.join(''),
    );

    if (isCombinationExists) {
      setModalStatus({
        isModalVisible: true,
        title: 'Combination Exists',
        description: 'This combination has already been added.',
      });

      return;
    }

    const isMaxCombinationsReached =
      combinations.length >= MAX_AMOUNT_OF_COMBINATIONS;

    if (isMaxCombinationsReached) {
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
  };

  const handleSelectedNumberPress = (combinationIndex: number) => {
    const newCombination: TCombination = [...selectedCombination];

    const combinationNumber = newCombination[combinationIndex];

    if (combinationNumber) {
      newCombination[combinationIndex] = '';

      setSelectedCombination(newCombination);
    }
  };

  const handleSelectNumber = (number: string) => {
    const isSelected = selectedCombination.includes(number);
    const newCombination: TCombination = [...selectedCombination];

    if (isSelected) {
      // clear the number in combination if selected
      const selectedIndex = newCombination.indexOf(number);

      newCombination.splice(selectedIndex, 1, '');
    } else {
      // add the number to the first empty slot in the combination
      const emptyIndex = newCombination.findIndex(item => item === '');

      if (emptyIndex === -1) {
        setModalStatus({
          isModalVisible: true,
          title: 'Combination is full',
          description: 'Please deselect a number before adding a new one.',
        });

        return;
      }

      newCombination.splice(emptyIndex, 1, number);
    }

    setSelectedCombination(newCombination);
  };

  return {
    selectedCombination,
    handlePlay,
    handleSelectNumber,
    handleSelectedNumberPress,
  };
};

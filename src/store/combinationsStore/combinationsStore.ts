import { create } from 'zustand';
import { TCombination } from '../../types';
import type { TCombinationsStore } from './combinationsStore.types';

const TEST_COMBINATIONS: TCombination[] = [
  ['1', '2', '3', '4', '5'],
  ['6', '7', '8', '9', '10'],
];

const initialState = {
  combinations: TEST_COMBINATIONS,
};

export const useCombinationsStore = create<TCombinationsStore>()(set => ({
  ...initialState,

  addCombination: combination =>
    set(state => ({
      combinations: [...state.combinations, combination],
    })),

  removeCombination: index =>
    set(state => ({
      combinations: state.combinations.filter((_, i) => i !== index),
    })),
}));

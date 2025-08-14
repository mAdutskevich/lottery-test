import { create } from 'zustand';
import type { TCombinationsStore } from './combinationsStore.types';

const initialState = {
  combinations: [],
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

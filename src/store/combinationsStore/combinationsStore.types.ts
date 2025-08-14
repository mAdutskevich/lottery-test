import type { TCombination } from '../../types';

export type TCombinationsStore = {
  combinations: TCombination[];
  removeCombination: (index: number) => void;
  addCombination: (combination: TCombination) => void;
};

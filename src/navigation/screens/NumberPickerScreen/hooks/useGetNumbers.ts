import { useMemo } from 'react';

const NUMBER_AMOUNT = 42;

export const useGetNumbers = () => {
  const numbers = useMemo(
    () => Array.from({ length: NUMBER_AMOUNT }, (_, i) => (i + 1).toString()),
    [],
  );

  return { numbers };
};

import { spacing } from './spacing';
import type { TTheme } from './types';
import { typography } from './typography';
import { attributes } from './attributes';
import { lightPalette } from './palette';

export const lightTheme: TTheme = {
  palette: lightPalette,
  typography,
  spacing,
  attributes,
};

export * from './types';
export * from './spacing';
export * from './attributes';
export * from './typography';

import type { TAttributes } from './TAttributes';
import type { TPaletteKey } from './TPaletteKey';
import type { TSpacing } from './TSpacing';
import type { TTypography } from './TTypography';

export type TTheme = {
  attributes: TAttributes;
  palette: TPaletteKey;
  spacing: TSpacing;
  typography: TTypography;
};

import type { TMergePressableStylesFn } from '../Pressable.types';

export const mergePressableStyles: TMergePressableStylesFn = (
  style,
  pressStyle,
) => {
  if (!pressStyle) return style;

  if (!style) return ({ pressed }) => (pressed ? pressStyle : undefined);

  return ({ pressed }) => (pressed ? [style, pressStyle] : style);
};

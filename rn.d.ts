import 'styled-components/native';
import type { TTheme } from './src/themes';

declare module 'styled-components/native' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends TTheme {}
}

declare module '*.png' {
  const value: import('react-native').ImageSourcePropType;
  export default value;
}

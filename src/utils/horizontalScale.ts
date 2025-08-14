import { Dimensions } from 'react-native';
import { DEFAULT_SCREEN_WIDTH } from 'src/constants';

const { width } = Dimensions.get('window');

export const horizontalScale = (size: number) =>
  (width / DEFAULT_SCREEN_WIDTH) * size;

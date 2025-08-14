import { Dimensions } from 'react-native';
import { DEFAULT_SCREEN_WIDTH } from '../constants';

const { width } = Dimensions.get('window');

export const horizontalScale = (size: number) =>
  (width / DEFAULT_SCREEN_WIDTH) * size;

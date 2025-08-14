import { Dimensions } from 'react-native';
import { DEFAULT_SCREEN_HEIGHT } from '../constants';

const { height } = Dimensions.get('window');

export const verticalScale = (size: number) =>
  (height / DEFAULT_SCREEN_HEIGHT) * size;

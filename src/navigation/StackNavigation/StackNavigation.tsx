import { createStackNavigator } from '@react-navigation/stack';
import { EStackNavigationScreens } from '../../enums';
import type { TStackNavigationParamList } from '../../types';
import { NumberPickerScreen, PlayCombinationsScreen } from '../screens';

const StackNavigator = createStackNavigator<TStackNavigationParamList>();

export const StackNavigation = () => {
  return (
    <StackNavigator.Navigator
      initialRouteName={EStackNavigationScreens.PlayCombinations}
      screenOptions={{
        headerShown: false,
      }}
    >
      <StackNavigator.Screen
        name={EStackNavigationScreens.PlayCombinations}
        component={PlayCombinationsScreen}
      />

      <StackNavigator.Screen
        name={EStackNavigationScreens.NumberPicker}
        component={NumberPickerScreen}
      />
    </StackNavigator.Navigator>
  );
};

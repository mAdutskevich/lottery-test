import { createStackNavigator } from '@react-navigation/stack';
import { EStackNavigationScreens } from 'src/enums';
import type { TStackNavigationParamList } from 'src/types';
import { NumberPickerScreen, PlayCombinations } from '../screens';

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
        component={PlayCombinations}
      />

      <StackNavigator.Screen
        name={EStackNavigationScreens.NumberPicker}
        component={NumberPickerScreen}
      />
    </StackNavigator.Navigator>
  );
};

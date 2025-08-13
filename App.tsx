import {
  hideAsync as hideSplashScreen,
  setOptions as setSplachScreenOptions,
  preventAutoHideAsync as preventShowSplashScreen,
} from 'expo-splash-screen';
import '@expo/metro-runtime';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';
import { useColorScheme } from 'react-native';
import { StackNavigation } from '@/navigation';
import { EPreferredColorScheme } from '@/enums';

preventShowSplashScreen();
setSplachScreenOptions({
  duration: 400,
  fade: true,
});

export default function App() {
  const colorScheme = useColorScheme();
  const theme =
    colorScheme === EPreferredColorScheme.Dark ? DarkTheme : DefaultTheme;

  return (
    <NavigationContainer theme={theme} onReady={hideSplashScreen}>
      <StackNavigation />
    </NavigationContainer>
  );
}

registerRootComponent(App);

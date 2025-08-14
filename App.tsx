import {
  hideAsync as hideSplashScreen,
  setOptions as setSplachScreenOptions,
  preventAutoHideAsync as preventShowSplashScreen,
} from 'expo-splash-screen';
import '@expo/metro-runtime';
import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';
import { ThemeProvider } from 'styled-components/native';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { lightTheme } from './src/themes';
import { StackNavigation } from './src/navigation';

preventShowSplashScreen();
setSplachScreenOptions({
  duration: 400,
  fade: true,
});

export default function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <NavigationContainer theme={DefaultTheme} onReady={hideSplashScreen}>
        <StackNavigation />
      </NavigationContainer>
    </ThemeProvider>
  );
}

registerRootComponent(App);

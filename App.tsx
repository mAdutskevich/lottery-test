import {
  hideAsync as hideSplashScreen,
  setOptions as setSplachScreenOptions,
  preventAutoHideAsync as preventShowSplashScreen,
} from "expo-splash-screen";
import "@expo/metro-runtime";
import "react-native-gesture-handler";
import { registerRootComponent } from "expo";
import { useColorScheme } from "react-native";
import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import { Navigation } from "./src/navigation";

preventShowSplashScreen();
setSplachScreenOptions({
  duration: 400,
  fade: true,
});

export default function App() {
  const colorScheme = useColorScheme();

  const theme = colorScheme === "dark" ? DarkTheme : DefaultTheme;

  return (
    <Navigation
      theme={theme}
      onReady={() => {
        hideSplashScreen();
      }}
    />
  );
}

registerRootComponent(App);


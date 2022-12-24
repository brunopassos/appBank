import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/global/styles/theme';
import { StatusBar } from 'expo-status-bar';

import { Container } from './src/styles';

import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from "@expo-google-fonts/poppins";
import { Dashboard } from './src/screens/Dashboard';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
      <ThemeProvider theme={theme}>
        <StatusBar style="light"/>
        <Container onLayout={onLayoutRootView}>
              <Dashboard/>
        </Container>
      </ThemeProvider>
  );
}


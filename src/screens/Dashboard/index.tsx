import React from "react";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import * as SplashScreen from 'expo-splash-screen';

import { DashboardHeader } from "../../components/DashboardHeader";
import { Content } from "../../components/Content";


import { Container } from "./styles";

import {
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  } from "@expo-google-fonts/poppins";

SplashScreen.preventAutoHideAsync();

export function Dashboard(){
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
        <Container onLayout={onLayoutRootView}>
            <DashboardHeader/>
            <Content/>
        </Container>
    )
}

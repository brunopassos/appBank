import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { useTheme } from "styled-components";

import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Dashboard } from "../screens/Dashboard";
import { TransactionScreen } from "../screens/TransactionScreen";
import { CardsScreen } from "../screens/CardsScreen";
import { ProfileScreen } from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

export function TabRoutes(){

    const theme = useTheme();

    return(
        <Tab.Navigator
         screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: theme.colorsHomeScreen.header2,
            tabBarInactiveTintColor: theme.colorsHomeScreen.header3,
            tabBarStyle:{
                backgroundColor: theme.colorsHomeScreen.backgroundSecondary,
                borderTopColor: theme.colorsHomeScreen.backgroundSecondary,
                paddingBottom: 10,
                height: 60
            }
        }}
        
         >
            <Tab.Screen
             name="Home" 
             component={Dashboard}
             options={{
                tabBarIcon: ({size, color}) => (
                    <Entypo name="home" size={size} color={color}/>
                )
             }}
             />

            <Tab.Screen 
            name="Cartões" 
            component={CardsScreen}
            options={{
                tabBarIcon: ({size, color}) => (
                    <Entypo name="credit-card" size={size} color={color}/>
                )
             }}
            />

            <Tab.Screen 
            name="Transações" 
            component={TransactionScreen}
            options={{
                tabBarIcon: ({size, color}) => (
                    <MaterialCommunityIcons name="newspaper-variant" size={size} color={color}/>
                )
             }}
            />

            <Tab.Screen 
            name="Perfil" 
            component={ProfileScreen}
            options={{
                tabBarIcon: ({size, color}) => (
                    <Ionicons name="person" size={size} color={color}/>
                )
             }}
            />
        </Tab.Navigator>
    )
}
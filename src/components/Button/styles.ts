import styled from "styled-components/native";
import { Animated } from "react-native";


export const Container = styled.View`
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 40px;
    right: 30px;
    background-color: ${({theme}) => theme.colorsHomeScreen.backgroundPrincipal};
    width: 50px;
    height: 50px;
    border-radius: 25px;
`


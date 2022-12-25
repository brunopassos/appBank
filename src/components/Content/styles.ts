import styled from "styled-components/native";

export const Container = styled.View`
    flex: 2.5;
    background-color: ${({theme}) => theme.colorsHomeScreen.backgroundSecondary};
    width: 100%;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
`
import styled from "styled-components/native";

export const Container = styled.View`
    flex-direction: row;
    flex: 2.5;
    background-color: ${({theme}) => theme.colorsHomeScreen.backgroundSecondary};
    width: 100%;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
`

export const FunctionItensArea = styled.View`
    margin-top: 33px;
    width: 100%;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-evenly;
`
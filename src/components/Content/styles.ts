import styled from "styled-components/native";

export const Container = styled.View`
    flex-direction: column;
    flex: 4;
    background-color: ${({theme}) => theme.colorsHomeScreen.backgroundSecondary};
    width: 100%;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    align-items: center;
    justify-content: center;
`

export const FunctionItensArea = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-evenly;
`
import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";

interface Props{
    first: boolean;
}

export const Container = styled.View<Props>`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 70px;

    ${({ first }) => {

    switch (first) {

    case true:
        
        return css`
        border-bottom-color: ${({ theme }) =>
            theme.colorsHomeScreen.myCardsLine};
        border-bottom-width: 1px;
        border-bottom-style: solid;
        `;

    default:
        return false;
    }
    }}
`

export const ImageAndOptionName = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-left: 20px;
`

export const Image = styled.View`
    width: 52px;
    height: 52px;
    background-color: ${({theme}) => theme.cardScreenColors.cardIcon};
    border-radius: 26px;
    align-items: center;
    justify-content: center;
`

export const OptionName = styled.Text`
    margin-left: 35px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: ${({theme}) => theme.colorsHomeScreen.iconNoSelected};
`

export const Button = styled(TouchableOpacity)`
    margin-right: 21px;
    color: ${({theme}) => theme.cardScreenColors.cardButton};
`

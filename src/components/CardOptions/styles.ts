import styled from "styled-components/native";

interface OptionProps {
    selected: boolean;
}

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 66px;
`

export const Option = styled.View<OptionProps>`
    width: 140px;
    height: 40px;   
    border-radius: 20px;
    background-color: ${({theme, selected}) =>  selected ? theme.colorsHomeScreen.backgroundPrincipal : theme.cardScreenColors.transactionOptionBackground};
    margin: 0px 13px;
    align-items: center;
    justify-content: center;
`

export const OptionName = styled.Text<OptionProps>`
    color: ${({theme}) =>  theme.cardScreenColors.balance};
    opacity: ${({selected}) =>  selected ? 1 : .5};
`
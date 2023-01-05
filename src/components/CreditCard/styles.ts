import styled from "styled-components/native";

export const Container = styled.View`
    width: 350px;
    height: 149px;
    background-color: ${({theme}) => theme.colorsHomeScreen.backgroundPrincipal};
    border-radius: 20px;
    flex-direction: row;
    justify-content: space-between;
`

export const NumberAndBalance = styled.View`
    padding-left: 22px;
    justify-content: flex-end;
    padding-bottom: 10px;
`


export const CardNumber = styled.Text`
    color: ${({theme}) => theme.cardScreenColors.cardNumber};
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    margin-bottom: 8px;
`


export const BalanceTitle = styled.Text`
    color: ${({theme}) => theme.cardScreenColors.balanceTitle};
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    margin-bottom: 4px;
`


export const Balance = styled.Text`
    color: ${({theme}) => theme.cardScreenColors.balance};
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
`


export const FlagAndDate = styled.View`
    align-items: center;
    justify-content: space-between;
    padding-right: 20px;
`


export const ExpireDate = styled.Text`
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: ${({theme}) => theme.cardScreenColors.balance};
    margin-bottom: 10px;
`


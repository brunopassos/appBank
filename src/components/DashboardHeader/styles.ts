import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize"

export const Container = styled.View`
    flex:1;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 10px;
`

export const UserDetails = styled.View`
    flex-direction: row;
    width: 100%;
    padding-top: 50px;
`

export const User = styled.View`
    flex:1;
    align-items: flex-start;
    width: 100%;
    margin-left: 27px;
`
export const UserGreetings = styled.Text` 
    font-size: 18px;
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colorsHomeScreen.header1};
`

export const UserName = styled.Text` 
    font-size: 22px;
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colorsHomeScreen.header2};
`


export const ProfileImage = styled.Image`
    width: ${RFValue(60)}px;
    height: ${RFValue(60)}px;
    border-radius: 50px;
    margin-right: 25px;
`

export const MoneyDetails = styled.View`
    align-items: center;
    margin-top: 22px;
`

export const MoneyBalance = styled.Text` 
    font-size: 26px;
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colorsHomeScreen.header2};
    `


export const BalanceTitle = styled.Text`
    font-size: 14px;
    color: ${({theme}) => theme.colorsHomeScreen.header3};
`


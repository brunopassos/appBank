import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    background-color: ${({theme}) => theme.colorsHomeScreen.backgroundSecondary};
    padding-top: 50px;
`;

export const Header = styled.Text`
    color: ${({theme}) => theme.colorsHomeScreen.header2};
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    margin-bottom: 48px;
`
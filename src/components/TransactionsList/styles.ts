import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: ${({ theme }) => theme.colorsHomeScreen.cardList};
    border-radius: 20px;
    margin-bottom: 90px;
    margin-top: 25px;
`;


export const CardListHeader  = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
`


export const Title  = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: ${({ theme }) => theme.colorsHomeScreen.myCards};
  margin-left: 26px;
`


export const ShowAll  = styled(TouchableOpacity)``


export const Text  = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: ${({ theme }) => theme.colorsHomeScreen.myCards};
  margin-right: 28px;
  text-decoration: underline;
`


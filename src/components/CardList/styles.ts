import { TouchableOpacity } from 'react-native';
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
`;

export const CardListHeader = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: ${({ theme }) => theme.colorsHomeScreen.myCards};
  margin-left: 26px;
`;

export const ShowAll = styled(TouchableOpacity)`
 
`;

export const Text = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: ${({ theme }) => theme.colorsHomeScreen.myCards};
  margin-right: 28px;
  text-decoration: underline;
`;


export const Cards = styled.View`
    width: 378px;
    height: 140px;
    background-color: ${({ theme }) => theme.colorsHomeScreen.cardList};
    border-radius: 20px;
    margin-top: 29px;
`
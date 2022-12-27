import { TouchableOpacity } from 'react-native';
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  width: 100%;
  height: 224px;
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
  font-size: 20px;
  color: ${({ theme }) => theme.colorsHomeScreen.myCards};
  margin-left: 26px;
  margin-top: 39px;
`;

export const ShowAll = styled(TouchableOpacity)`
 
`;

export const Text = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: ${({ theme }) => theme.colorsHomeScreen.myCards};
  margin-top: 39px;
  margin-right: 28px;
  text-decoration: underline;
`;


export const Cards = styled.View`
    width: 378px;
    height: 178px;
    background-color: ${({ theme }) => theme.colorsHomeScreen.cardList};
    margin-left: 7px;
    border-radius: 20px;
    margin-top: 29px;
`
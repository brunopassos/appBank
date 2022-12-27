import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

export const Container = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Button = styled(TouchableOpacity)`
  flex-direction: row;
  background-color: ${({ theme }) => theme.colorsHomeScreen.functions};
  border-radius: 50px;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
`;

export const ButtonTextName = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: ${({ theme }) => theme.colorsHomeScreen.iconNoSelected};
  margin-top: 19px;
`;

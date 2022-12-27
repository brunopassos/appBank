import { TouchableOpacity } from 'react-native';
import styled, { css } from "styled-components/native";

interface Props {
  first: boolean;
}

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;
  height: 89px;
  flex-direction: row;
  align-items: center;
  justify-content: center;

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
`;

export const ImageView = styled.View`
  width: 30%;
`;

export const Image = styled.View`
  width: 52px;
  height: 52px;
  border-radius: 26px;
  background-color: ${({ theme }) => theme.colorsHomeScreen.cardIconBackground};
  align-items: center;
  justify-content: center;
  margin-left: 20px;
`;

export const CardInfos = styled.View`
  width: 70%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CardNameAndNumber = styled.View`
  align-items: flex-start;
  justify-content: center;
`;

export const CardName = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: ${({ theme }) => theme.colorsHomeScreen.iconNoSelected};
`;

export const CardNumber = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: ${({ theme }) => theme.colorsHomeScreen.myCards};
`;

export const CardLimitAndData = styled.View`
  margin-right: 19px;
  align-items: flex-end;
  justify-content: center;
`;

export const CardLmit = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: ${({ theme }) => theme.colorsHomeScreen.iconNoSelected};
`;

export const CardData = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: ${({ theme }) => theme.colorsHomeScreen.myCards};
`;

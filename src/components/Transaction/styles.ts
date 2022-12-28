import styled, { css } from "styled-components/native";

interface Props{
  first: boolean;
}

export const Container = styled.View<Props>`
  height: 70px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 378px;

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

export const ImageAndNameView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 50%;
`;

export const IconView = styled.View`
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

export const CategoryName = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: ${({ theme }) => theme.colorsHomeScreen.iconNoSelected};
  margin-left: 50px;
`;

export const TransactionValue = styled.Text`
  margin-right: 19px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: ${({ theme }) => theme.colorsHomeScreen.iconNoSelected};
`;

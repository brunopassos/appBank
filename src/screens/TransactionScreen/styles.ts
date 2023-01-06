import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colorsHomeScreen.backgroundSecondary};
    align-items: center;
    padding-top: 50px;
`;

export const Header = styled.Text`
    color: ${({theme}) => theme.colorsHomeScreen.header2};
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    margin-bottom: 52px;
`

export const TransactionsScreenOptions = styled.View`
    width: 100%;
    margin-bottom: 32px;
`


export const TitleAndFilter = styled.View`
    width: 100%;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`


export const Title = styled.Text`
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    color: ${({theme}) => theme.colorsHomeScreen.myCards};
    margin-left: 25px;
`

export const Filter = styled.Text`
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: ${({theme}) => theme.colorsHomeScreen.myCards};
    margin-right: 28px;
    text-decoration: underline;
`

export const FilterOptions = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-top: 22px;
`

export const FilterAll = styled.View`
    margin-left: 27px;
    width: 72px;
    height: 40px;
    align-items: center;
    justify-content: center;
    background: ${({theme}) => theme.colorsHomeScreen.backgroundPrincipal};
    border-radius: 20px;
`

export const FilterAllText = styled.Text`
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: ${({theme}) => theme.cardScreenColors.balance};
    
`

export const FilterIncome = styled.View`
    margin-left: 11px;
    width: 129px;
    height: 40px;
    align-items: center;
    justify-content: space-evenly;
    background: ${({theme}) => theme.cardScreenColors.transactionOptionBackground};
    border-radius: 20px;
    flex-direction: row;
`

export const FilterIncomeText = styled.Text`
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: ${({theme}) => theme.cardScreenColors.balanceTitle};
    `

export const FilterExpense = styled.View`
    margin-left: 11px;
    width: 129px;
    height: 40px;
    align-items: center;
    justify-content: space-evenly;
    background: ${({theme}) => theme.cardScreenColors.transactionOptionBackground};
    border-radius: 20px;
    flex-direction: row;
`

export const FilterExpenseText = styled.Text`
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: ${({theme}) => theme.cardScreenColors.balanceTitle};
`


export const TransactionsList = styled.View`
    background: ${({theme}) => theme.colorsHomeScreen.cardList};
    border-radius: 20px;
    margin-bottom: 32px;
`

export const TodayTitle = styled.Text`
    color: ${({theme}) => theme.colorsTransactionsScreen.titleText};
    padding-bottom: 29px;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    margin-left: 29px;
`
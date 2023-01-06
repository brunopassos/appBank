import React from 'react';

import IncomeSvg from "../../assets/income.svg";
import ExpenseSvg from "../../assets/expense.svg";

import {
 Container,
 Header,
 TransactionsScreenOptions,
 TitleAndFilter,
 FilterOptions,
 Title,
 FilterButton,
 Filter,
 FilterAll,
 FilterAllText,
 FilterIncome,
 FilterIncomeText,
 FilterExpense,
 FilterExpenseText
} from './styles';

export function TransactionScreen(){
    return(
        <Container>
            <Header>
                Transações
            </Header>
            <TransactionsScreenOptions>
                <TitleAndFilter>
                    <Title>
                        Recentes
                    </Title>
                    <FilterButton>
                        <Filter>
                            Selecione o perído
                        </Filter>
                    </FilterButton>
                </TitleAndFilter>
                <FilterOptions>
                    <FilterAll>
                        <FilterAllText>
                            Todas
                        </FilterAllText>
                    </FilterAll>
                    <FilterIncome>
                        <IncomeSvg width={16} height={16}/>
                        <FilterIncomeText>
                            Entradas                            
                        </FilterIncomeText>
                    </FilterIncome>
                    <FilterExpense>
                        <ExpenseSvg width={16} height={16}/>
                        <FilterExpenseText>
                            Gastos
                        </FilterExpenseText>
                    </FilterExpense>
                </FilterOptions>
            </TransactionsScreenOptions>
        </Container>
    );
}
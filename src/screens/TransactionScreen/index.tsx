import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';

import { Transaction } from '../../components/Transaction';

import IncomeSvg from "../../assets/income.svg";
import ExpenseSvg from "../../assets/expense.svg";

import {
 Container,
 Header,
 TransactionsScreenOptions,
 TitleAndFilter,
 FilterOptions,
 Title,
 Filter,
 FilterAll,
 FilterAllText,
 FilterIncome,
 FilterIncomeText,
 FilterExpense,
 FilterExpenseText,
 TransactionsList,
 TodayTitle
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
                    <TouchableOpacity>
                        <Filter>
                            Selecione o perído
                        </Filter>
                    </TouchableOpacity>
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
            <ScrollView>
                <TodayTitle>
                    Hoje
                </TodayTitle>
                <TransactionsList>
                    <Transaction categoryName="Games" first={true} iconName="game" transactionValue="600"/>
                    <Transaction categoryName="Supermercado" first={true} iconName="shopping" transactionValue="400"/>
                    <Transaction categoryName="Conta de luz" first={false} iconName="bills" transactionValue="250"/>
                </TransactionsList>
                <TodayTitle>
                    Ontem
                </TodayTitle>
                <TransactionsList>
                    <Transaction categoryName="Games" first={true} iconName="game" transactionValue="600"/>
                    <Transaction categoryName="Supermercado" first={true} iconName="shopping" transactionValue="400"/>
                    <Transaction categoryName="Conta de luz" first={false} iconName="bills" transactionValue="250"/>
                </TransactionsList>
                <TodayTitle>
                    Ultimos 7 dias
                </TodayTitle>
                <TransactionsList>
                    <Transaction categoryName="Games" first={true} iconName="game" transactionValue="600"/>
                    <Transaction categoryName="Conta de luz" first={true} iconName="bills" transactionValue="250"/>
                    <Transaction categoryName="Games" first={true} iconName="game" transactionValue="600"/>
                    <Transaction categoryName="Supermercado" first={true} iconName="shopping" transactionValue="400"/>
                    <Transaction categoryName="Conta de luz" first={false} iconName="bills" transactionValue="250"/>
                </TransactionsList>
            </ScrollView>
        </Container>
    );
}
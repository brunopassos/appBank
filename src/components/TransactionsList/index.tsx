import React from 'react';
import { Transaction } from '../Transaction';

import {
 Container,
 CardListHeader,
 Title,
 ShowAll,
 Text,
} from './styles';

export function TransactionsList(){
    return(
        <>
            <CardListHeader>
                <Title>Transações recentes</Title>
                <ShowAll>
                    <Text>Ver todas</Text>
                </ShowAll>
            </CardListHeader>
            <Container>
                <Transaction first={true} categoryName="Games" iconName="game" transactionValue="600,00" />
                <Transaction first={false} categoryName="Supermercado" iconName="shopping" transactionValue="400,00"/>
            </Container>
        </>
        
    );
}
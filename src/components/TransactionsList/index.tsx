import React from 'react';
import { Transaction } from '../Transaction';

import { Link } from '@react-navigation/native';

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
                    <Text>
                        <Link to={{screen: "Transações"}}>Ver todas</Link>
                    </Text>
                </ShowAll>
            </CardListHeader>
            <Container>
                <Transaction first={true} categoryName="Games" iconName="game" transactionValue="600,00" />
                <Transaction first={false} categoryName="Supermercado" iconName="shopping" transactionValue="400,00"/>
            </Container>
        </>
        
    );
}
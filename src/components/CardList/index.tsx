import React from 'react';
import { Card } from '../Card';

import {
 Container,
 CardListHeader,
 Title,
 ShowAll,
 Text,
 Cards
} from './styles';

export function CardList(){
    return(
        <Container>
            <CardListHeader>
                <Title>Meus Cartões</Title>
                <ShowAll>
                    <Text>Ver todos</Text>
                </ShowAll>
            </CardListHeader>
            <Cards>
                <Card first={true} iconName="visa" brand={"Visa Card"} number={"1234"} limit={"2.200,00"} expiration={"01/24"} />
                <Card first={false} iconName="mastercard" brand={"Master Card"} number={"8765"} limit={"400,00"} expiration={"10/28"} />
            </Cards>
        </Container>
    );
}
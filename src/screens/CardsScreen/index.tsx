import React from 'react';

import { CreditCard } from '../../components/CreditCard';

import {
 Container,
 Header,
} from './styles';

export function CardsScreen(){
    return(
        <Container>
            <Header>Meus Cartões</Header>
            <CreditCard/>
        </Container>
    );
}
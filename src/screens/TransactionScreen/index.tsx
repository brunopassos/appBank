import React from 'react';
import { Text } from 'react-native-svg';

import {
 Container,
 Header
} from './styles';

export function TransactionScreen(){
    return(
        <Container>
            <Header>
                Transações
            </Header>
        </Container>
    );
}
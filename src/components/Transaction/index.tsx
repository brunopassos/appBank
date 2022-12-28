import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

interface ITransactionProps{
    first: boolean;
    iconName: any;
    categoryName: string;
    transactionValue: string;
}

import {
 Container,
 ImageAndNameView,
 IconView,
 Image,
 CategoryName,
 TransactionValue,
} from './styles';

export function Transaction({categoryName, first, iconName, transactionValue}:ITransactionProps){
    return(
        <Container first={first}>
            <ImageAndNameView>
                <IconView>
                    <Image>
                        <MaterialIcons name={iconName} size={24} color="black" />
                    </Image>
                </IconView>
                <CategoryName>
                    {categoryName}
                </CategoryName>
            </ImageAndNameView>
            <TransactionValue>
                - R$ {transactionValue}
            </TransactionValue>
        </Container>
    );
}
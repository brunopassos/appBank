import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import GameSvg from "../../assets/game.svg";
import ShoppingSvg from "../../assets/shopping.svg";

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
                        {iconName === "game" && <GameSvg width={30} height={30}/>}
                        {iconName === "shopping" && <ShoppingSvg width={30} height={30}/>}
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
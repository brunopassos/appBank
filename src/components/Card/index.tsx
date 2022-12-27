import React from 'react';

import { Fontisto } from '@expo/vector-icons';

interface ICardProps{
    first: boolean;
    iconName: any;
    brand: string;
    number: string;
    limit: string;
    expiration: string;
}

import {
 Container,
 ImageView,
 Image,
 CardInfos,
 CardNameAndNumber,
 CardName,
 CardNumber,
 CardLimitAndData,
 CardLmit,
 CardData,
} from './styles';

export function Card({first, iconName, brand, number, limit, expiration}:ICardProps){
    return(
        <Container first={first}>
            <ImageView>
                <Image>
                    <Fontisto name={iconName} size={20} color="black" />
                </Image>
            </ImageView>
            <CardInfos>
                <CardNameAndNumber>
                    <CardName>{brand}</CardName>
                    <CardNumber>**{number}</CardNumber>
                </CardNameAndNumber>
                <CardLimitAndData>
                    <CardLmit>R$ {limit}</CardLmit>
                    <CardData>{expiration}</CardData>
                </CardLimitAndData>
            </CardInfos>
        </Container>
    );
}
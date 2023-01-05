import React from 'react';

import { Fontisto } from '@expo/vector-icons';

import VisaSvg from "../../assets/visa.svg";
import MasterSvg from "../../assets/mastercard.svg";


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
                    {iconName == "visa" && <VisaSvg width={30} height={30}/>}
                    {iconName == "mastercard" && <MasterSvg width={30} height={30}/>}
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
import React from 'react';
import { Dimensions, Text } from 'react-native';

import Carousel from 'react-native-snap-carousel';

import { CarouselItem } from "../../components/CarouselItem";

import {
 Container,
 Header,
 CarouselContainer
} from './styles';

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = SLIDER_WIDTH * 0.88;


const cardData = [
    {
        id: "1",
        number: "8753",
        balance: "2.000,00",
        iconName: "visa",
        expireDate: '01/24'
    },
    {
        id: "2",
        number: "7452",
        balance: "1.300,00",
        iconName: "mastercard",
        expireDate: '04/29'
    },
    {
        id: "3",
        number: "5689",
        balance: "4.800,00",
        iconName: "mastercard",
        expireDate: '01/35'
    },
]

export function CardsScreen(){

    return(
        <Container>
            <Header>Meus Cartões</Header>
            <CarouselContainer>
                <Carousel 
                    data={cardData}
                    renderItem={CarouselItem}
                    sliderWidth={SLIDER_WIDTH}
                    itemWidth={ITEM_WIDTH}
                    useScrollView={true}
                />
            </CarouselContainer>
        </Container>
    );
}
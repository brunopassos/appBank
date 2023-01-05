import { Text } from "react-native"
import { CreditCard } from "../CreditCard";

import { Dimensions, StyleSheet } from 'react-native';

import{
    Container,
    CardDetails
} from "./styles";

const ITEM_WIDTH = Dimensions.get("window").width * 0.88;

interface ItemProps{
    item: {
        id: string,
        number: string,
        balance: string,
        iconName: string,
        expireDate: string
    }
}

function CarouselItem({item}:ItemProps){
    return(
        <Container style={styles.cardContainer}  key={item.id}>
            <CreditCard number={item.number} balance={item.balance} expireDate={item.expireDate} iconName={item.iconName}/>
        </Container>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        width: ITEM_WIDTH
    }
})

export { CarouselItem };


import { RectButtonProps } from "react-native-gesture-handler";
import { useTheme } from "styled-components";

import TransferSvg from "../../assets/transfer.svg"
import BillsSvg from "../../assets/bills.svg"
import MoreSvg from "../../assets/more.svg"


import { 
    Container,
    Button,
    ButtonTextName
 } from "./styles";

interface Props extends RectButtonProps{
    onPress: () => void;
    name: any;
    color: string;
    buttonName: string;
}

export function FunctionItem({onPress, name, color, buttonName}:Props){
    const theme = useTheme();

    return (
        <Container>
            <Button onPress={onPress}>
                {name === "transfer" && <TransferSvg width={30} height={30} color={theme.cardScreenColors.cardNumber}/>}
                {name === "card" && <BillsSvg width={30} height={30} color={theme.cardScreenColors.cardNumber}/>}
                {name === "more" && <MoreSvg width={30} height={30} color={theme.cardScreenColors.cardNumber}/>}
            </Button>
            <ButtonTextName>
                {buttonName}
            </ButtonTextName>
        </Container>
    )
}
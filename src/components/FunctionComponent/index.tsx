import { RectButtonProps } from "react-native-gesture-handler";
import { MaterialIcons } from '@expo/vector-icons';


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
    return (
        <Container>
            <Button onPress={onPress}>
                <MaterialIcons name={name} size={40} color={color} />
            </Button>
            <ButtonTextName>
                {buttonName}
            </ButtonTextName>
        </Container>
    )
}
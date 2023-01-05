import { CardSettings } from "../CardSettings";
import {
    Container
} from "./styles";


function OptionsDetails(){
    return (
        <Container>
            <CardSettings first={true} imageName="edit" name="Editar Cartão"/>
            <CardSettings first={false} imageName="remove" name="Remover Cartão"/>
        </Container>
    )
}

export { OptionsDetails };
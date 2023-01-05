import {
    Container,
    Option,
    OptionName
} from "./styles";

interface OptionProps {
    selected: boolean;
}

function CardOptions({ selected }:OptionProps){
    return(
        <Container>
            <Option selected={true}>
                <OptionName selected={true}>Configurações</OptionName>
            </Option>
            <Option selected={false}>
                <OptionName selected={false}>Transações</OptionName>
            </Option>
        </Container>
    )
}

export { CardOptions };
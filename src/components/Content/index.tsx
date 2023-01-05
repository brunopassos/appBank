import { useTheme } from "styled-components";
import { CardList } from "../CardList";

import { FunctionItem } from "../FunctionComponent";
import { TransactionsList } from "../TransactionsList";

import { 
    Container,
    FunctionItensArea
 } from "./styles";


export function Content(){

    const theme = useTheme();

    function handleFunctionButton(){
        console.log("teste")
    }

    return(
        <Container>
            <FunctionItensArea>
                <FunctionItem buttonName="Transferir" name="transfer" color={theme.colorsHomeScreen.iconFunctions}  onPress={handleFunctionButton}/>
                <FunctionItem buttonName="Contas" name="card" color={theme.colorsHomeScreen.iconFunctions}  onPress={handleFunctionButton}/>
                <FunctionItem buttonName="Mais" name="more" color={theme.colorsHomeScreen.iconFunctions}  onPress={handleFunctionButton}/>
            </FunctionItensArea>
            <CardList/>
            <TransactionsList/>
        </Container>
    )
}
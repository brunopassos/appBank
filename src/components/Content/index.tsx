import { useTheme } from "styled-components";

import { 
    Container,
    FunctionItensArea
 } from "./styles";
import { FunctionItem } from "../FunctionComponent";


export function Content(){

    const theme = useTheme();

    function handleFunctionButton(){
        console.log("teste")
    }

    return(
        <Container>
            <FunctionItensArea>
                <FunctionItem buttonName="Transferir" name="compare-arrows" color={theme.colorsHomeScreen.iconFunctions}  onPress={handleFunctionButton}/>
                <FunctionItem buttonName="Cartões" name="credit-card" color={theme.colorsHomeScreen.iconFunctions}  onPress={handleFunctionButton}/>
                <FunctionItem buttonName="Mais" name="more-horiz" color={theme.colorsHomeScreen.iconFunctions}  onPress={handleFunctionButton}/>
            </FunctionItensArea>
        </Container>
    )
}
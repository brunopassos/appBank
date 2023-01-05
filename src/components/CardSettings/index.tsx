import {
    Container,
    ImageAndOptionName,
    Image,
    OptionName,
    Button,
} from "./styles";

import ArrowSvg from "../../assets/arrow-card.svg";
import RemoveSvg from "../../assets/remove.svg";
import EditSvg from "../../assets/edit.svg";

interface SettingsProps{
    imageName: string;
    name: string;
    first: boolean
}

function CardSettings({ imageName, name, first }:SettingsProps){
    return(
        <Container first={first}>
            <ImageAndOptionName>
                <Image>
                    {imageName === "edit" && <EditSvg width={30} height={30}/>}
                    {imageName === "remove" && <RemoveSvg/>} 
                </Image>
                <OptionName>
                    {name}
                </OptionName>
            </ImageAndOptionName>
            <Button>
                <ArrowSvg/>
            </Button>
        </Container>
    )
}

export { CardSettings };
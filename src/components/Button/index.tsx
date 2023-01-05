import { Animated, TouchableOpacity, View } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";

import {
    Container,
} from "./styles";

function Button(){

    const handleAddCard = () => {
        console.log("add Card")
    }
    return(
        <Container>
            <TouchableOpacity onPress={handleAddCard}>
                <View>
                    <AntDesign 
                        name="plus"
                        size={24}
                        color="#FFF"
                    />
                </View>
            </TouchableOpacity>
        </Container>
    )
}

export { Button };
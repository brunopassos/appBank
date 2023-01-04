import {
    Container,
    NumberAndBalance,
    CardNumber,
    BalanceTitle,
    Balance,
    FlagAndDate,
    ExpireDate,
} from "./styles"

import VisaSvg from "../../assets/visa.svg";
import { RFValue } from "react-native-responsive-fontsize";

export function CreditCard(){
    return(
        <Container>
            <NumberAndBalance>
                <CardNumber>
                    **** **** **** 3245
                </CardNumber>
                <BalanceTitle>
                    Saldo disponível
                </BalanceTitle>
                <Balance>
                    R$ 2.200,00
                </Balance>
            </NumberAndBalance>
            <FlagAndDate>
                <VisaSvg
                    width={70}
                    height={70}
                />
                <ExpireDate>01/24</ExpireDate>
            </FlagAndDate>
        </Container>
    )
}
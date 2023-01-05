import { Text } from "react-native";

import {
    Container,
    Card,
    NumberAndBalance,
    CardNumber,
    BalanceTitle,
    Balance,
    FlagAndDate,
    ExpireDate,
} from "./styles"

import VisaSvg from "../../assets/visa.svg";
import MasterSvg from "../../assets/mastercard.svg";
import { CardOptions } from "../CardOptions";
import { OptionsDetails } from "../OptionsDetails";

interface Props {
    number: string;
    balance: string;
    iconName: string;
    expireDate: string;
}

export function CreditCard({number, balance, iconName, expireDate}:Props){
    return(
        <Container>
            <Card>
                <NumberAndBalance>
                    <CardNumber>
                        **** **** **** {number}
                    </CardNumber>
                    <BalanceTitle>
                        Saldo disponível
                    </BalanceTitle>
                    <Balance>
                        R$ {balance}
                    </Balance>
                </NumberAndBalance>
                <FlagAndDate>
                    {iconName === "visa" &&
                    <VisaSvg
                        width={70}
                        height={70}
                    />
                    }
                    {iconName === "mastercard" &&
                    <MasterSvg
                        width={70}
                        height={70}
                    />
                    }
                    <ExpireDate>{expireDate}</ExpireDate>
                </FlagAndDate>
            </Card>
            <CardOptions selected/>
            <OptionsDetails />
        </Container>
    )
}
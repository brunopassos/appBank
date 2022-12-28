import { 
    Container,
    UserDetails,
    User,
    UserGreetings,
    UserName,
    ProfileImage,
    MoneyDetails,
    MoneyBalance,
    BalanceTitle,
 } from "./styles";

export function DashboardHeader(){
    return (
        <Container>
            <UserDetails>
                <User>
                    <UserGreetings>
                        Good Morning!
                    </UserGreetings>
                    <UserName>
                        Bruno
                    </UserName>
                </User>
                <ProfileImage source={{uri: "https://avatars.githubusercontent.com/u/26532465?v=4"}}/>
            </UserDetails>
            <MoneyDetails>
                <MoneyBalance>
                    R$ 8,640.00
                </MoneyBalance>
                <BalanceTitle>
                    Saldo
                </BalanceTitle>
            </MoneyDetails>
        </Container>
    )
}
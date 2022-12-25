import { Container } from "./styles";

import { DashboardHeader } from "../../components/DashboardHeader";
import { Content } from "../../components/Content";

export function Dashboard(){
    return (
        <Container>
            <DashboardHeader/>
            <Content/>
        </Container>
    )
}

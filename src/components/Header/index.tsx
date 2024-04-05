import {
 
    BackButton, 
    BackIcon, 
    Container, 
    Logo 

} from "./styled";

import logoImg from '@assets/logo.png'

type Props = {
    shoowBackButton?: boolean;
}

export function Header({shoowBackButton = false}: Props){
    return(
        <Container>
            {
                shoowBackButton &&
            <BackButton>
                <BackIcon />
            </BackButton>
            }
            <Logo source={logoImg}/>
        </Container>
    )
}
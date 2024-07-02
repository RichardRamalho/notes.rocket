import { Container, Profile, Logout } from "./styles";
import { RiShutDownLine } from 'react-icons/ri';

export function Header() {
    return (
        <Container>
            <Profile>
                <img src="https://github.com/RichardRamalho.png" 
                alt="user picture" />

                <div>
                    <span>Bem vindo</span>
                    <strong>Richard Ramalho</strong>
                </div>
            </Profile>
            <Logout>
                <RiShutDownLine/>
            </Logout>
        </Container >
      );
}
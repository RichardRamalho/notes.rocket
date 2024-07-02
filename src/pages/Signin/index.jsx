import { Container, Form, Backimg } from "./styles";
import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";

import { FiMail, FiLock } from "react-icons/fi";

export function Signin() {
  return (
    <Container>
      <Form>
        <h1>Rocket.notes</h1>
        <p>O seu app para criar e gerenciar notas!</p>

        <h2>Faça seu Login</h2>

        <Input placeholder="Email" type="text" icon={FiMail} />
        <Input placeholder="Senha" type="password" icon={FiLock} />

        <Button title="Entrar"/>

        <a href="#">Criar conta</a>
      </Form>

      <Backimg/>
    </Container>
  );
}

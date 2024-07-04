import { Container, Form, BackimgSign } from "./styles";
import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";
import { Link } from "react-router-dom";

import { FiUser, FiMail, FiLock } from "react-icons/fi";

export function Signup() {
  return (
    <Container>
      <BackimgSign />

      <Form>
        <h1>Rocket.notes</h1>
        <p>O seu app para criar e gerenciar notas!</p>

        <h2>Crie sua conta</h2>

        <Input placeholder="Nome" type="text" icon={FiUser} />
        <Input placeholder="Email" type="text" icon={FiMail} />
        <Input placeholder="Senha" type="password" icon={FiLock} />

        <Button title="Cadastrar" />

        <Link to="/">Voltar para o login</Link>
      </Form>
    </Container>
  );
}

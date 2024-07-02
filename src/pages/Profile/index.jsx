import { Container, Form, Avatar } from "./styles";
import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";

import { FiUser, FiMail, FiLock, FiArrowLeft, FiCamera } from "react-icons/fi";

export function Profile() {
  return (
    <Container>

      <header>
        <a href="/">
          <FiArrowLeft />
        </a>
      </header>
      <Form>
        <Avatar>
          <img src="https://github.com/RichardRamalho.png" alt="Foto do usuário" />

          <label htmlFor="avatar">
            <FiCamera />
            <input type="file" id="avatar" />
          </label>
        </Avatar>

        <Input placeholder="Nome" type="text" icon={FiUser} />
        <Input placeholder="Email" type="text" icon={FiMail} />

        <Input placeholder="Senha atual" type="password" icon={FiLock} />
        <Input placeholder="Nova Senha" type="password" icon={FiLock} />

        <Button title="Salvar" />

      </Form>
    </Container>
  );
}

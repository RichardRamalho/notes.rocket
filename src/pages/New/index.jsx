import { Container, Form } from "./styles";
import { Header } from "../../Components/Header";
import { Input } from "../../Components/Input";
import { Textarea } from "../../Components/Textarea";
import { Section } from "../../Components/Section";
import { NoteItem } from "../../Components/NoteItem";
import { Button } from "../../Components/Button";

export function New() {
  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <a href="/">voltar</a>
          </header>

          <Input placeholder="Título" type="text" />
          <Textarea placeholder="Observações"/>

          <Section title="Links úteis">
            <NoteItem value="https://rocketseat.com.br" />
            <NoteItem isNew placeholder="Novo link" />
          </Section>

          <Button title="Salvar" />
        </Form>
      </main>
    </Container>
  );
}
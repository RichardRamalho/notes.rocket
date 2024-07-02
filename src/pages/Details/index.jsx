/* eslint-disable react/jsx-no-target-blank */
import { Container, Links, Content } from "./styles";
import { Header } from "../../Components/Header";
import { Section } from "../../Components/Section";
import { Button } from "../../Components/Button";
import { ButtonText } from "../../Components/ButtonText";
import { Tag } from "../../Components/Tag";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>Introdução ao React</h1>

          <p>
            React é uma biblioteca de JavaScript desenvolvida pelo Facebook para
            construir interfaces de usuário (UI) interativas e eficientes. Ela
            se concentra na criação de componentes reutilizáveis que representam
            diferentes partes da interface do usuário. - No React, as interfaces
            de usuário são divididas em componentes. <br /> Um componente é uma
            parte autônoma e reutilizável da UI que pode conter tanto a lógica
            quanto a apresentação. - Os componentes podem ser funcionais ou
            baseados em classes. Os componentes funcionais são funções
            JavaScript, enquanto os baseados em classes são classes JavaScript
            que estendem `React.Component`.
          </p>

          <Section title="Links úteis">
            <Links>
              <li>
                <a href="https://cruzeiro.com.br" target="_blank">
                  https://cruzeiro.com.br</a>
              </li>
              <li>
                <a href="https://rocketseat.com.br/" target="_blank">
                  https://rocketseat.com.br
                </a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="Express" />
            <Tag title="Node.js" />
            <Tag title="React.js" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  );
}

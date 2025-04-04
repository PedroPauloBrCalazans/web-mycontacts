import { Container, Header, ListContainer, Card } from "./styles";

import arrow from "../../assets/images/icons/seta.svg";
import edit from "../../assets/images/icons/edit.svg";
import trash from "../../assets/images/icons/lixe.svg";

export default function ContactsList() {
  return (
    <Container>
      <Header>
        <strong>3 contatos</strong>
        <a href="/">Novo Contato</a>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Ordenar contatos" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Pedro Paulo</strong>
              <small>instagram</small>
            </div>
            <span>pedropaulo@mail.com</span>
            <span>(61) 9999-9999</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Editar" />
            </a>
            <button type="button">
              <img src={trash} alt="Deletar" />
            </button>
          </div>
        </Card>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Pedro Paulo</strong>
              <small>instagram</small>
            </div>
            <span>pedropaulo@mail.com</span>
            <span>(61) 9999-9999</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Editar" />
            </a>
            <button type="button">
              <img src={trash} alt="Deletar" />
            </button>
          </div>
        </Card>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Pedro Paulo</strong>
              <small>instagram</small>
            </div>
            <span>pedropaulo@mail.com</span>
            <span>(61) 9999-9999</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Editar" />
            </a>
            <button type="button">
              <img src={trash} alt="Deletar" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}

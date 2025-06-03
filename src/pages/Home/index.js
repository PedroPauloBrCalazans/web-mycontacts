import { Link } from "react-router-dom";

import {
  Container,
  InputSearchContainer,
  Header,
  ListContainer,
  Card,
} from "./styles";

import arrow from "../../assets/images/icons/seta.svg";
import edit from "../../assets/images/icons/edit.svg";
import trash from "../../assets/images/icons/lixe.svg";

export default function Home() {
  return (
    <Container>
      {/* <Modal danger /> */}

      {/* <Loader /> */}

      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato..." />
      </InputSearchContainer>

      <Header>
        <strong>3 contatos</strong>
        <Link to="/new">Novo Contato</Link>
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
            <Link to="/edit/123">
              <img src={edit} alt="Editar" title="Editar" />
            </Link>
            <button type="button">
              <img src={trash} alt="Deletar" title="Deletar" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}

import { Overlay, Container, Footer } from "./styles";

import Button from "../Utils/Button";

export default function Modal() {
  return (
    <Overlay>
      <Container>
        <h1>Título da modal</h1>
        <p>Corpo da modal</p>

        <Footer>
          <button type="button" className="cancel-button">
            Cancelar
          </button>

          <Button type="button">Deletar</Button>
        </Footer>
      </Container>
    </Overlay>
  );
}

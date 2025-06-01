import { Overlay, Container, Footer } from "./styles";

import Button from "../Utils/Button";
import PropTypes from "prop-types";

export default function Modal({ danger }) {
  return (
    <Overlay>
      <Container danger={danger}>
        <h1>Título da modal</h1>
        <p>Corpo da modal</p>

        <Footer>
          <button type="button" className="cancel-button">
            Cancelar
          </button>

          <Button type="button" danger={danger}>
            Deletar
          </Button>
        </Footer>
      </Container>
    </Overlay>
  );
}

Modal.propTypes = {
  danger: PropTypes.bool,
};

Modal.defaultProps = {
  danger: false,
};

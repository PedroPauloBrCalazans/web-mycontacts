import PropTypes from "prop-types";

import { ButtonContainer, Form } from "./style";

import FormGroup from "../FormGroup";
import { Input } from "../Utils/Input";
import { Select } from "../Utils/Select";
import Button from "../Utils/Button";
import { useState } from "react";

export default function ContactForm({ buttonLabel }) {
  const [nome, setNome] = useState("");

  // const emailInput = useRef(null);

  return (
    <Form>
      <FormGroup>
        <Input
          value={nome}
          placeholder="Nome"
          onChange={(event) => setNome(event.target.value)}
        />
      </FormGroup>

      <FormGroup error="O formato do e-mail é inválido.">
        <Input placeholder="E-mail" error />
      </FormGroup>

      {/* <FormGroup>
        <Input placeholder="E-mail" ref={emailInput} /> 
      </FormGroup>  ** ACESSANDO O ELEMENTO DE DENTRO DA DOM **  */}

      <FormGroup>
        <Input placeholder="Telefone" />
      </FormGroup>

      <FormGroup>
        <Select>
          <option value="123">Instagram</option>
          <option value="456">Facebook</option>
          <option value="789">Twitter</option>
          <option value="1011">TikTok</option>
          <option value="1213">Orkut</option>
        </Select>
      </FormGroup>

      <ButtonContainer type="submit">
        <Button type="submit">{buttonLabel}</Button>
      </ButtonContainer>
    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};

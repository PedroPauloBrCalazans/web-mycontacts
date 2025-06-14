import PropTypes from "prop-types";

import { ButtonContainer, Form } from "./style";

import FormGroup from "../FormGroup";
import { Input } from "../Utils/Input";
import { Select } from "../Utils/Select";
import Button from "../Utils/Button";
import { useState } from "react";

export default function ContactForm({ buttonLabel }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [category, setCategory] = useState("");

  function handleSubmit(event) {
    event.preventDefault(); //previne o comportamento padrão daquele evento
    console.log({ nome, email, telefone, category });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Input
          placeholder="Nome"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder="E-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder="Telefone"
          value={telefone}
          onChange={(event) => setTelefone(event.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="">Categorias</option>
          <option value="insta">Instagram</option>
          <option value="face">Facebook</option>
          <option value="twi">Twitter</option>
          <option value="tiktok">TikTok</option>
          <option value="ork">Orkut</option>
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

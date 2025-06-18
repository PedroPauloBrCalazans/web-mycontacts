import PropTypes from "prop-types";
import { useState } from "react";

import isEmailValid from "../../utils/isEmailValid";
import formatPhone from "../../utils/formatPhone";
import useErrors from "../../hooks/useErrors";

import { ButtonContainer, Form } from "./style";

import FormGroup from "../FormGroup";
import { Input } from "../Utils/Input";
import { Select } from "../Utils/Select";
import Button from "../Utils/Button";

export default function ContactForm({ buttonLabel }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [category, setCategory] = useState("");

  const { errors, setError, removeError, getErrorMessageByFieldName } =
    useErrors();

  const isFormValid = nome && errors.length === 0;

  function handleNameChange(event) {
    setNome(event.target.value);

    if (!event.target.value) {
      setError({ field: "nome", message: "Nome é obrigatório." });
    } else {
      removeError("nome");
    }
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);

    if (event.target.value && !isEmailValid(event.target.value)) {
      setError({ field: "email", message: "Email é inválido" });
    } else {
      removeError("email");
    }
  }

  function handleSubmit(event) {
    event.preventDefault(); //previne o comportamento padrão daquele evento
    console.log({
      nome,
      email,
      telefone: telefone.replace(/\D/g, ""),
      category,
    });
  }

  function handleFoneChange(event) {
    setTelefone(formatPhone(event.target.value));
  }

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <FormGroup error={getErrorMessageByFieldName("nome")}>
        <Input
          placeholder="Nome *"
          value={nome}
          onChange={handleNameChange}
          error={getErrorMessageByFieldName("nome")}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName("email")}>
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={handleEmailChange}
          error={getErrorMessageByFieldName("email")}
        />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder="Telefone"
          value={telefone}
          onChange={handleFoneChange}
          maxLength="15"
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

      <ButtonContainer>
        <Button type="submit" disabled={!isFormValid}>
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};

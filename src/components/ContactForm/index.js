import PropTypes from "prop-types";
import { useState } from "react";

import isEmailValid from "../../utils/isEmailValid";

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
  const [errors, setErrors] = useState([]);

  function handleNameChange(event) {
    setNome(event.target.value);

    if (!event.target.value) {
      setErrors((prevState) => [
        ...prevState,
        { field: "nome", message: "Nome é obrigatório" },
      ]);
    } else {
      setErrors((prevState) =>
        prevState.filter((error) => error.field !== "nome")
      );
    }
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);

    if (event.target.value && !isEmailValid(event.target.value)) {
      const errorAlreadyExists = errors.find(
        (error) => error.field === "email"
      );

      if (errorAlreadyExists) {
        return; // para a execusão
      }

      setErrors((prevState) => [
        ...prevState,
        { field: "email", message: "Email é inválido" },
      ]);
    } else {
      setErrors((prevState) =>
        prevState.filter((error) => error.field !== "email")
      );
    }
  }

  function handleSubmit(event) {
    event.preventDefault(); //previne o comportamento padrão daquele evento
    console.log({ nome, email, telefone, category });
  }

  function getErrorMessageByFieldName(fieldName) {
    return errors.find((error) => error.field === fieldName)?.message;
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup error={getErrorMessageByFieldName("nome")}>
        <Input
          placeholder="Nome"
          value={nome}
          onChange={handleNameChange}
          error={getErrorMessageByFieldName("nome")}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName("email")}>
        <Input
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

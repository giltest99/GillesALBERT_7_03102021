import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TextError from "./SpanError";
import BackError from "./BackEndError";
import HomePageNav from "./HomePageNav";

const Main = styled.main`
  background-color: #fff;
  padding: 1rem 0.5rem 4rem;
  @media screen and (max-width: 1000px) {
    padding: 1rem 0.5rem 4rem;
  }

  button {
    padding: 1rem;
  }
`;

const StyledForm = styled(Form)`
  max-width: 40rem;
  margin: 2rem auto;
`;

const Label = styled.label`
  display: block;
  font-size: 1.25em;
  color: var(--tertiary);
`;

const InputText = styled(Field).attrs({
  type: "text",
  autoComplete: "off",
})`
  border: 1px solid rgb(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  margin-bottom: 0.25rem;
  padding: 0.75rem;
  width: 100%;
  font-size: 1.5em;
  font-family: Lato, sans-serif;
  &:focus {
    outline: none;
    border: 1px solid var(--primary);
  }
`;

const InputEmail = styled(Field).attrs({
  type: "email",
  autoComplete: "off",
})`
  border: 1px solid rgb(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  margin-bottom: 0.25rem;
  padding: 0.75rem;
  width: 100%;
  font-size: 1.5em;
  font-family: Lato, sans-serif;
  &:focus {
    outline: none;
    border: 1px solid var(--primary);
  }
`;

const InputPassword = styled(Field).attrs({
  type: "password",
  autoComplete: "off",
})`
  border: 1px solid rgb(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  margin-bottom: 0.25rem;
  padding: 0.75rem;
  width: 100%;
  font-size: 1.5em;
  font-family: Lato, sans-serif;
  &:focus {
    outline: none;
    border: 1px solid var(--primary);
  }
`;

const FieldWrapper = styled.div`
  display: block;
  margin: 1rem 0;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const Button = styled.button`
  border: none;
  display: inline-block;
  padding: 0.5rem 1rem;
  vertical-align: middle;
  overflow: hidden;
  text-decoration: none;
  color: white;
  background-color: var(--primary);
  text-align: center;
  cursor: pointer;
  white-space: nowrap;
  font-weight: 700;
  font-size: 1.25em;
  border-radius: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--primary-hover);
  }
`;

export default function Register() {
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const registerSchema = yup.object().shape({
    username: yup
      .string()
      .min(8, "Minimum de 8 caractères")
      .required("Nom d'utilisateur requis"),
    email: yup
      .string()
      .email("Entrez un email valide")
      .required("Email requis"),
    password: yup
      .string()
      .min(5, "Minimum de 5 caractères")
      .required("Mot de passe requis"),
  });

  const handleSubmit = (values, { resetForm }) => {
    axios
      .post("http://localhost:3000/api/users/signup", values)
      .then((response) => {
        resetForm();
        alert(response.data.message);
        navigate("/login");
      })
      .catch((error) => {
        setErrorMessage(error.response.data.message);
      });
  };

  const resetForm = () => {
    setErrorMessage("");
  };

  return (
    <>
      <HomePageNav />
      <Main>
        <Formik
          initialValues={initialValues}
          validationSchema={registerSchema}
          onSubmit={handleSubmit}
        >
          <StyledForm>
            <BackError>{errorMessage}</BackError>

            <FieldWrapper>
              <Label htmlFor="username">Nom d'utilisateur</Label>
              <InputText name="username" autoComplete="off" />
              <ErrorMessage name="username" component={TextError} />
            </FieldWrapper>

            <FieldWrapper>
              <Label htmlFor="email">Email</Label>
              <InputEmail name="email" />
              <ErrorMessage name="email" component={TextError} />
            </FieldWrapper>

            <FieldWrapper>
              <Label htmlFor="password">Mot de passe</Label>
              <InputPassword name="password" />
              <ErrorMessage name="password" component={TextError} />
            </FieldWrapper>

            <ButtonsWrapper>
              <Button type="submit">Créer le compte</Button>
              <Button type="reset" onClick={resetForm}>
                Effacer
              </Button>
            </ButtonsWrapper>
          </StyledForm>
        </Formik>
      </Main>
    </>
  );
}

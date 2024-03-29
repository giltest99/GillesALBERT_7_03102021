import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useSignIn, useIsAuthenticated } from "react-auth-kit";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import TextError from "./SpanError";
import BackError from "./BackEndError";
import HomePageNav from "./HomePageNav";
import ButtonStandard from "./ButtonStandard";

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

export default function Login() {
  const [errorMessage, setErrorMessage] = useState("");
  const signIn = useSignIn();
  const isAuthenticated = useIsAuthenticated();

  const initialValues = {
    email: "",
    password: "",
  };

  const registerSchema = yup.object().shape({
    email: yup
      .string()
      .email("Entrez un email valide")
      .required("Email requis"),
    password: yup
      .string()
      .min(2, "Minimum de 2 caractères")
      .required("Mot de passe requis"),
  });

  const handleSubmit = (values) => {
    axios
      .post("http://localhost:3000/api/users/login", values)
      .then((res) => {
        if (res.status === 200) {
          if (
            signIn({
              token: res.data.token,
              expiresIn: 120,
              tokenType: "Bearer",
              authState: res.data,
            })
          ) {
          } else {
            return <button onClick={handleSubmit()}>Connexion</button>;
          }
        }
      })
      .catch((error) => {
        setErrorMessage(error.response.data.message);
      });
  };
  if (isAuthenticated()) {
    // If authenticated user, then redirect to secure section
    return <Navigate to={"/posts"} replace />;
  }

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
              <ButtonStandard type="submit" txt="Se connecter" />
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

import { useState } from "react";
import axios from "axios";
import { useSignIn, useIsAuthenticated } from "react-auth-kit";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
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

const Form = styled.form`
  max-width: 40rem;
  margin: 2rem auto;
  /* border: 1px solid purple; */
`;

const Label = styled.label`
  display: block;
  font-size: 1.25em;
  color: var(--tertiary);
`;

const InputText = styled.input.attrs({
  type: "text",
  autoComplete: "off",
})`
  border: 1px solid rgb(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  padding: 0.75rem;
  width: 100%;
  font-size: 1.5em;
  font-family: Lato, sans-serif;
  &:focus {
    outline: none;
    border: 1px solid var(--primary);
  }
`;

const InputPassword = styled.input.attrs({
  type: "password",
  autoComplete: "off",
})`
  border: 1px solid rgb(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  padding: 0.75rem;
  width: 100%;
  font-size: 1.5em;
  font-family: Lato, sans-serif;
  &:focus {
    outline: none;
    border: 1px solid var(--primary);
  }
`;

const Button = styled.button`
  min-width: 6rem;
  margin-right: 1rem;
  color: var(--tertiary);
  &:hover {
    cursor: pointer;
    color: var(--primary);
  }
`;

const SignInComponent = () => {
  const signIn = useSignIn();
  const isAuthenticated = useIsAuthenticated();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/users/login", formData)
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
            console.log("Connexion ok");
          } else {
            return <button onClick={onSubmit()}>Connexion</button>;
          }
        }
      });
  };
  if (isAuthenticated()) {
    // If authenticated user, then redirect to secure dashboard

    return <Navigate to={"/posts"} replace />;
  }

  return (
    <>
      <HomePageNav />
      <Main>
        <Form onSubmit={onSubmit}>
          <p>
            <Label htmlFor="email">Email</Label>
            <InputText
              type={"email"}
              autoFocus
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </p>
          <p>
            <Label htmlFor="password">Mot de passe</Label>
            <InputPassword
              type={"password"}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </p>

          <Button>Connexion</Button>
        </Form>
      </Main>
    </>
  );
};

export default SignInComponent;

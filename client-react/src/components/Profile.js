import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Navigation from "./Navigation";
import ButtonStandard from "./ButtonStandard";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 0.5rem;
`;

const Section = styled.section`
  max-width: 40rem;
  margin: 2rem auto;
  /* border: 1px solid purple; */
`;

const H1 = styled.h1`
  margin: 1rem auto 2rem;
  color: var(--tertiary);
`;

const H3 = styled.h3`
  margin: 0 auto 2rem;
  color: var(--tertiary);
`;

const Button = styled.button`
  min-width: 6rem;
  margin-right: 1rem;
  padding: 0.5rem 1rem;
  color: var(--tertiary);
  &:hover {
    cursor: pointer;
    color: var(--primary);
  }
`;

export default function UserAccount() {
  const [connectedUser, setConnectedUser] = useState({
    userId: "",
    userName: "",
    email: "",
    isAdmin: "",
    biography: "",
    avatar: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("_auth_state"));
    setConnectedUser({
      userId: user.userId,
      userName: user.username,
      email: user.email,
      isAdmin: user.is_admin,
      biography: user.biography,
      avatar: user.avatar,
    });
  }, []);

  const logout = () => {
    localStorage.clear();
    navigate("/", { replace: true });
    window.location.reload();
  };

  const deleteUser = (id) => {
    const loggedUser = JSON.parse(localStorage.getItem("_auth_state"));

    const result = window.confirm("Voulez-vous supprimer votre compte ?");

    if (result === true && !loggedUser.isAdmin) {
      axios
        .delete(`http://localhost:3000/api/users/${id}`)
        .then(() => {
          logout();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return;
    }
  };

  return (
    <>
      <Navigation />
      <Main>
        <Section>
          <figure>
            <img
              src={connectedUser.avatar}
              alt="user avatar"
              style={{
                width: "10rem",
                borderRadius: "50%",
              }}
            />
          </figure>

          <H1>Bonjour, {connectedUser.userName}</H1>
          <H3>Mon adresse mail : {connectedUser.email}</H3>
          <ButtonStandard
            onClick={() => deleteUser(connectedUser.userId)}
            txt="Supprimer mon compte"
          />
        </Section>
      </Main>
    </>
  );
}

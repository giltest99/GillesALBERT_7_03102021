import { useState, useEffect } from "react";
import styled from "styled-components";
import Navigation from "./Navigation";

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

export default function UserAccount() {
  const [connectedUser, setConnectedUser] = useState({
    userId: "",
    userName: "",
    email: "",
    isAdmin: "",
    biography: "",
    avatar: "",
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("_auth_state"));
    console.log(user);
    setConnectedUser({
      userId: user.id,
      userName: user.username,
      email: user.email,
      isAdmin: user.is_admin,
      biography: user.biography,
      avatar: user.avatar,
    });
  }, []);

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
          {/* TODO : create field for biography */}
          {/* <h4>Quelques mots sur moi :</h4> */}
          {/* <p>{connectedUser.biography}</p> */}

          <p>
            <button
              onClick={() => alert("Supprimer mon compte...")}
              style={{
                /* margin: "1rem", */
                padding: "0.5rem 1rem",
                cursor: "pointer",
              }}
            >
              Supprimer mon compte
            </button>
          </p>
        </Section>
      </Main>
    </>
  );
}

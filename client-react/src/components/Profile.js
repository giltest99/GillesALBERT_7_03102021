import { useState, useEffect } from "react";
import styled from "styled-components";
import Navigation from "./Navigation";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  background-color: #fff;
`;

const H1 = styled.h1`
  /* margin: 0 0 1rem 0; */
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
        <H1>Mon espace</H1>
        <figure>
          <img
            src={connectedUser.avatar}
            alt="user avatar"
            style={{
              width: "10rem",
              display: "inline-block",
              borderRadius: "50%",
            }}
          />
        </figure>

        <h2>Bonjour, {connectedUser.userName}</h2>
        <br />
        <section>
          <div>
            <h3>Mon adresse mail : {connectedUser.email}</h3>
            <br />
            <h4>Quelques mots sur moi :</h4>
            <p>{connectedUser.biography}</p>
          </div>
        </section>

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
      </Main>
    </>
  );
}

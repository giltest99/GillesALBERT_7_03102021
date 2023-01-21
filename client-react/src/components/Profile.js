import { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Navigation from "./Navigation";

const Main = styled.main`
  max-width: 1024px;
  margin: 0 auto;
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

  const logout = () => {
    alert("Se déconnecter...");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <>
      <Navigation />
      <Main>
        <h1>Mon espace</h1>
        {/* <button onClick={() => navigate("/posts")}>Retour aux posts</button> */}
        <br />

        <h2>Bonjour, {connectedUser.userName}</h2>
        <br />
        <section
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "1rem",
            justifyContent: "space-between",
          }}
        >
          <div>
            <h3>Mon adresse mail : {connectedUser.email}</h3>
            <br />
            <h4>Quelques mots sur moi :</h4>
            <p>{connectedUser.biography}</p>
          </div>
          <div>
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
          </div>
        </section>

        <p>
          {/* <button
            onClick={logout}
            style={{
              margin: "1rem",
              padding: "0.5rem 1rem",
              cursor: "pointer",
            }}
          >
            Se déconnecter
          </button> */}
          {/* <button
            onClick={() => alert("Modifier mon compte...")}
            style={{
              margin: "1rem",
              padding: "0.5rem 1rem",
              cursor: "pointer",
            }}
          >
            Modifier mon compte
          </button> */}
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

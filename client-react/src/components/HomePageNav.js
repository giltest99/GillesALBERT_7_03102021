import React from "react";
import { Link } from "react-router-dom";
import GroupoLogo from "../assets/mono-groupo.svg";

export default function HomePageNav() {
  return (
    <>
      <header style={{marginBottom:"2rem"}}>
        <p style={{ display: "flex", justifyContent: "center" }}>
          <img src={GroupoLogo} alt="logo groupomania" />
        </p>
        <ul>
            <li><Link to="/login">Se connecter</Link></li>
            <li><Link to="/register">Créer un compte</Link></li>
        </ul>
      </header>
    </>
  );
}

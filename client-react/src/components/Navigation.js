import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/mono-groupo.svg";
import SignOutComponent from "./SignOutComponent";

export default function Navigation() {
  return (
    <header className="container-fluid" style={{ backgroundColor: "white", marginBottom: "1rem" }}>
      <img
        src={Logo}
        alt="logo groupomania"
        style={{
          maxWidth: "90%",
          minWidth: "6rem",
          /* padding: "1rem", */
          minHeight: "3rem",
          height: "4rem",
        }}
      />
      <nav>
        <ul style={{display:"flex",padding:"1rem",flexWrap:"wrap"}}>
        <li style={{margin: "0.5rem 1rem 0.5rem 0"}}>
            <Link to="/posts">Posts</Link>
          </li>
          <li style={{margin: "0.5rem 1rem 0.5rem 0"}}>
            <Link to="/create-post">Ecrire</Link>
          </li>
          <li style={{margin: "0.5rem 1rem 0.5rem 0"}}>
            <Link to="/profile">Mon profil</Link>
          </li>
          <li style={{margin: "0.5rem 1rem 0.5rem 0"}}>
            <SignOutComponent />
          </li>
        </ul>
      </nav>
    </header>
  );
}

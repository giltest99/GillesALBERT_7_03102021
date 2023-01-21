import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../assets/mono-groupo.svg";
import SignOutComponent from "./SignOutComponent";

const Header = styled.header`
  background-color: white;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
`;

const Image = styled.img.attrs({
  src: Logo,
  alt: "logo groupomania",
})`
  max-width: 90%;
  min-width: 6rem;
  min-height: 3rem;
  height: 4rem;
  padding: 0.5rem;
`;

const Nav = styled.nav`

@media (max-width: 500px) {
    
  }
`;

export default function Navigation() {
  return (
    <Header>
      <Image />
      <nav>
      
        <ul
          style={{
            display: "flex",
            padding: "0.5rem",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <li style={{ margin: "0.5rem 1rem 0.5rem 0" }}>
            <Link to="/posts">Posts</Link>
          </li>
          <li style={{ margin: "0.5rem 1rem 0.5rem 0" }}>
            <Link to="/create-post">Ecrire</Link>
          </li>
          <li style={{ margin: "0.5rem 1rem 0.5rem 0" }}>
            <Link to="/profile">Mon profil</Link>
          </li>
          <li style={{ margin: "0.5rem 1rem 0.5rem 0" }}>
            <SignOutComponent />
          </li>
        </ul>
      </nav>
    </Header>
  );
}

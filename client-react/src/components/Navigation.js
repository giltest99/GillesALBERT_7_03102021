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
  justify-content: center;
`;

const Image = styled.img.attrs({
  src: Logo,
  alt: "logo groupomania",
})`
  min-width: 6rem;
  min-height: 3rem;
  height: 4rem;
  padding: 0.5rem;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  padding: 0.5rem;
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  & li {
    padding: 1rem;
    width: 100%auto;
    text-align: center;
  }
`;

const NavLink = styled(Link)`
  color: var(--tertiary);
  font-size: 1.25rem;
  font-weight: 600;
  margin: 1rem;
  text-align: center;
  padding: 0.5rem;
  transition: background-color 0.2s ease;
  @media (max-width: 700px) {
    margin: 1rem 0;
  }
  &:hover {
    background-color: var(--primary-hover);
    color: #f1f1f1;
  }
/*   &:active {
    background-color: var(--primary-hover);
    color: #f1f1f1;
  } */
`;

export default function Navigation() {
  return (
    <Header>
      <Image />
      <Nav>
        <Ul>
          <li>
            <NavLink to="/posts">Posts</NavLink>
          </li>
          <li>
            <NavLink to="/create-post">Ecrire</NavLink>
          </li>
          <li>
            <NavLink to="/profile">Mon profil</NavLink>
          </li>
          <li>
            <SignOutComponent />
          </li>
        </Ul>
      </Nav>
    </Header>
  );
}

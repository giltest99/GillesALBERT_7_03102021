import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/mono-groupo.svg";
import SignOutComponent from "./SignOutComponent";

export default function Navigation() {
  return (
    <header className="container-fluid" style={{ backgroundColor: "white" }}>
      <img
        src={Logo}
        alt="logo groupomania"
        style={{
          width: "40%",
          minWidth: "6rem",
          /* padding: "1rem", */
          minHeight: "3rem",
          height: "4rem",
        }}
      />
      {/* <nav style={{ justifyContent: "space-between", alignItems: "center" }}>
        <ul>
          <li>
            <details role="list" dir="ltr">
              <summary role="link">Messages</summary>
              <ul role="listbox">
                <li>
                  <Link to="/create-post">Ecrire</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details role="list" dir="ltr">
              <summary role="link">Profil</summary>
              <ul role="listbox">
                <li>
                  <Link to="/profile">Mon profil</Link>
                </li>
                <li>
                  <Link to="/">Se déconnecter</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </nav> */}
      <nav>
        <ul>
          <li>
            <Link to="/create-post">Ecrire</Link>
          </li>
          <li>
            <Link to="/profile">Mon profil</Link>
          </li>
          <li>
            <SignOutComponent />
          </li>
        </ul>
      </nav>
    </header>
  );
}

import React from "react";
import { useNavigate } from "react-router-dom";
import HomePageNav from "./HomePageNav";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <>
    <HomePageNav />
      <h1>Home Page Groupomania</h1>
      <br />
      <br />
      <button onClick={() => navigate("/login")}>Se connecter</button>
      <br />
      <br />
      <button onClick={() => navigate("/register")}>Créer un compte</button>
    </>
  );
}

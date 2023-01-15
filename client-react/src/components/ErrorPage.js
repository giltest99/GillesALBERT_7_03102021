import React from "react";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
    const navigate = useNavigate();
  return (
    <>
      <h1>Error page !</h1>
      <br />
      <br />
      <button onClick={() => navigate("/login")}>Login form</button>
      <br />
      <br />
      <button onClick={() => navigate("/register")}>Register form</button>
    </>
  );
}

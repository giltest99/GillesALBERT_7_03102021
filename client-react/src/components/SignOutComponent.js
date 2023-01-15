import React from "react";
import { useNavigate, Link } from "react-router-dom";

export default function SignOutComponent() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/", { replace: true });
    window.location.reload(false);
  };
  return <Link onClick={logout}>Sign Out</Link>;
}

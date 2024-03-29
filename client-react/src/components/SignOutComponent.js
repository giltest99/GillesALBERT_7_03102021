import React from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: var(--tertiary);
  font-size: 1.25rem;
  font-weight: 600;
  padding: 0.5rem;
  border-radius: 0.33rem;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: var(--primary);
    color: #f1f1f1;
  }
`;

export default function SignOutComponent() {
  const navigate = useNavigate();

  const logout = () => {
    let result = window.confirm("Voulez-vous vous déconnecter ?");

    if (result === true) {
      localStorage.clear();
      navigate("/", { replace: true });
      window.location.reload();
    } else {
      return;
    }
  };
  return <StyledLink onClick={logout}>Se déconnecter</StyledLink>;
}

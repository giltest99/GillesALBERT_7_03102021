import React from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: var(--tertiary);
  font-size: 1.25rem;
  font-weight: 600;
  padding: 0.5rem;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: var(--primary-hover);
    color: #F1F1F1;
  }
`;

export default function SignOutComponent() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/", { replace: true });
    window.location.reload();
  };
  return <StyledLink onClick={logout}>Se déconnecter</StyledLink>;
}

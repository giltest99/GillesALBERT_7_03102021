import React from "react";
import styled from "styled-components";

export default function ButtonStandard({ txt, onClick,type }) {
  return (
    <>
      <Button onClick={onClick} type={type}>{txt}</Button>
    </>
  );
}

const Button = styled.button`
  border: none;
  display: inline-block;
  padding: 0.5rem 1rem;
  vertical-align: middle;
  overflow: hidden;
  text-decoration: none;
  color: white;
  background-color: var(--primary);
  text-align: center;
  cursor: pointer;
  white-space: nowrap;
  font-weight: 700;
  font-size: 1.25em;
  border-radius: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--primary-hover);
  }
`;

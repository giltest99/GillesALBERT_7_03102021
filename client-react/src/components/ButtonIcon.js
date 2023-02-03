import React from "react";
import styled from "styled-components";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";

export function ButtonIcon({ txt, onClick, icn }) {
  if (icn === "modify")
    return (
      <Button onClick={onClick} title="Modifier">
        <FiEdit />
      </Button>
    );
  if (icn === "delete")
    return (
      <Button onClick={onClick} title="Supprimer">
        <AiOutlineDelete />
      </Button>
    );
}

const Button = styled.button`
  background-color: var(--primary);
  color: white;
`;

import React from "react"
import { Container } from "../../nanites"
import { Atom } from "../../../types/Atom.type"

const Column = ({ children, ...props }:Atom) => {
  return <Container.ColumnStyled {...props}>{children}</Container.ColumnStyled>
}

export default Column
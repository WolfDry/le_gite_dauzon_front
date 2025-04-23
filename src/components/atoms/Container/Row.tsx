import React from "react"
import { Container } from "../../nanites"
import { Atom } from "../../../types/Atom.type"

const Row = ({ children, ...props }:Atom) => {
  return <Container.RowStyled {...props}>{children}</Container.RowStyled>
}

export default Row
import React from "react"
import { Container } from "../../nanites"
import { Atom } from "../../../types/Atom.type"

const Grid = ({ children, ...props }:Atom) => {
  return <Container.GridStyled {...props}>{children}</Container.GridStyled>
}

export default Grid
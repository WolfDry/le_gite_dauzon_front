import React from "react"
import { Container } from "../../nanites"
import { Atom } from "../../../types/Atom.type"

const Wrap = ({ children, ...props }: Atom) => {
  return <Container.WrapStyled {...props}>{children}</Container.WrapStyled>
}

export default Wrap
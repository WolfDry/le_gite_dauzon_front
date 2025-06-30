import React from "react"
import { Container } from "../../nanites"
import { Atom } from "../../../types/Atom.type"

const Masonry = ({ children, ...props }: Atom) => {
  return <Container.MasonryStyled {...props}>{children}</Container.MasonryStyled>
}

export default Masonry
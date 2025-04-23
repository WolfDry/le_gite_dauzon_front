import React from "react"
import { Text } from "../../nanites"
import { Atom } from "../../../types/Atom.type"

const Name = ({ ...props }:Atom) => {
  return <Text.NameStyled {...props}></Text.NameStyled>
}

export default Name
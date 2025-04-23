import React from "react"
import { Text } from "../../nanites"
import { Atom } from "../../../types/Atom.type"

const Label = ({ ...props }:Atom) => {
  return <Text.LabelStyled {...props}></Text.LabelStyled>
}

export default Label
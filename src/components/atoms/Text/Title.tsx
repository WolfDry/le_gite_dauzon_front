import React from "react"
import { Text } from "../../nanites"
import { Atom } from "../../../types/Atom.type"

const Title = ({ ...props }: Atom) => {
  return <Text.TitleStyled {...props}></Text.TitleStyled>
}

export default Title
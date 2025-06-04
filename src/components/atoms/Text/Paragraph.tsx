import React from "react"
import { Text } from "../../nanites"
import { Atom } from "../../../types/Atom.type"

const Paragraph = ({ ...props }: Atom) => {
  return <Text.ParagraphStyled {...props}></Text.ParagraphStyled>
}

export default Paragraph
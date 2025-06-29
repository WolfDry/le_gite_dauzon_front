import React from "react"
import { Text } from "../../nanites"
import { Atom } from "../../../types/Atom.type"

const List = ({ ...props }: Atom) => {
  return <Text.ListStyled {...props}></Text.ListStyled>
}

export default List
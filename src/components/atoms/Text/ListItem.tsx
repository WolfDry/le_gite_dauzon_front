import React from "react"
import { Text } from "../../nanites"
import { Atom } from "../../../types/Atom.type"

const ListItem = ({ ...props }: Atom) => {
  return <Text.ListItemStyled {...props}></Text.ListItemStyled>
}

export default ListItem
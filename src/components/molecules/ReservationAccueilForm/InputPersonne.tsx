import React, { useState } from 'react'
import { Container, Text, Visual } from '../../atoms'
import { white } from '../../../assets/color'
import InputContainer from './InputContainer'

const InputPersonne = () => {

  const [inputData, setInputData] = useState([{
    label: "Adultes",
    nb: 0
  },
  {
    label: "Enfants",
    nb: 0
  },
  {
    label: "Animaux",
    nb: 0
  }])

  const [isDisplay, setIsDisplay] = useState(false)

  const show = () => {
    setIsDisplay(!isDisplay)
  }

  const updateData = (action: string, newData: { label: string, nb: number }) => {
    setInputData(prevData =>
      prevData.map(item => {
        if (item.label === newData.label) {
          const newNb = action === "plus" ? item.nb + 1 : Math.max(0, item.nb - 1)
          return { ...item, nb: newNb }
        }
        return item
      })
    )
  }

  return (
    <Container.Column position="relative">
      <Container.Row direction="row" onClick={() => show()} padding="12px 30px 12px 20px" justifyContent="center" alignItems="center" height="100%" gap="14px" alignSelf="stretch" borderRadius="7px 6.25rem 6.25rem 7px" mBorderRadius="7px" background={white} cursor="pointer">
        <Visual.Svg label="personne" />
        <Text.Paragraph>
          Nombre de personnes
        </Text.Paragraph>
        <Visual.Svg label="bottomArrow" />
      </Container.Row>
      <Container.Column position="absolute" top="65px" width="255px" padding="1.25rem" alignItems="flex-start" gap="15px" borderRadius="10px" background={white} display={!isDisplay ? "none" : "flex"} mDisplay={!isDisplay ? "none" : "flex"} zIndex="2">
        {inputData.map(data => {
          return (
            <InputContainer data={data} updateData={updateData} />
          )
        })}
      </Container.Column>
    </Container.Column>
  )
}

export default InputPersonne
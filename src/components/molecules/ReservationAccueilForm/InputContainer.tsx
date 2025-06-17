import React from 'react'
import { Container, Form, Text, Visual } from '../../atoms'

type Props = {
  data: {
    label: string
    nb: number
  }
  updateData: any
}

const InputContainer = ({ data, updateData }: Props) => {

  return (
    <Container.Row justifyContent="space-between" alignItems="center" alignSelf="stretch">
      <Text.Paragraph>
        {data.label}
      </Text.Paragraph>
      <Container.Row justifyContent="center" alignItems="center" gap="10px">
        <Container.Row onClick={() => updateData("minus", data)} height="15px" alignItems="center">
          <Visual.Svg label="minus" />
        </Container.Row>
        <Form.Input type="number" width="4.1vw" padding="6px 15px" textAlign="center" value={data.nb} />
        <Container.Row onClick={() => updateData("plus", data)} height="15px" alignItems="center">
          <Visual.Svg label="plus" />
        </Container.Row>
      </Container.Row>
    </Container.Row>
  )
}

export default InputContainer
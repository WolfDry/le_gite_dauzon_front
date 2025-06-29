import React, { useEffect, useState } from 'react'
import { Container, Text, Visual } from '../../atoms'
import { dark, white } from '../../../assets/color'
import InputContainer from './InputContainer'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../types/Redux.type'
import { updateNbPersonne } from '../../../stores/thunks/appThunks'

type Value = {
  label: string
  nb: number
}

type Props = {
  isInReservation: boolean
  value: Value[]
  setValue: ((value: any) => void)
}

const InputPersonne = ({ isInReservation, value, setValue }: Props) => {

  const dispatch = useDispatch<AppDispatch>()

  const [isDisplay, setIsDisplay] = useState(false)

  useEffect(() => {
    dispatch(updateNbPersonne(value))
  }, [value, dispatch])

  const show = () => {
    setIsDisplay(!isDisplay)
  }

  const updateData = (action: string, newData: { label: string, nb: number }) => {
    const updatedValue = value.map(item => {
      if (item.label === newData.label) {
        const newNb = action === "plus" ? item.nb + 1 : Math.max(0, item.nb - 1)
        return { ...item, nb: newNb }
      }
      return item
    })
    setValue(updatedValue)
  }

  return (
    <Container.Column position="relative" alignSelf={isInReservation ? "stretch" : ""}>
      <Container.Row direction="row" border={`1px solid ${dark}`} onClick={() => show()} padding={isInReservation ? "15px" : "12px 30px 12px 20px"} justifyContent="space-between" alignItems="center" height="54px" gap="14px" alignSelf="stretch" borderRadius={isInReservation ? "10px" : "7px 6.25rem 6.25rem 7px"} mBorderRadius="7px" background={white} cursor="pointer">
        {!isInReservation &&
          <Visual.Svg label="personne" />
        }
        <Container.Column flex="1" alignItems="center">
          <Text.Paragraph alignSelf="center">
            {
              value.every(data => data.nb === 0) && !isInReservation
                ? "Nombre de personnes"
                : value
                  .filter(data => data.nb > 0)
                  .map(data => `${data.nb} ${data.label}`)
                  .join(' - ')
            }
          </Text.Paragraph>
        </Container.Column>
        <Visual.Svg label="bottomArrow" />
      </Container.Row>
      <Container.Column position="absolute" top="65px" width="255px" padding="1.25rem" alignItems="flex-start" gap="15px" borderRadius="10px" background={white} display={!isDisplay ? "none" : "flex"} mDisplay={!isDisplay ? "none" : "flex"} zIndex="2">
        {value.map(data => {
          return (
            <InputContainer data={data} updateData={updateData} />
          )
        })}
      </Container.Column>
    </Container.Column>
  )
}

export default InputPersonne
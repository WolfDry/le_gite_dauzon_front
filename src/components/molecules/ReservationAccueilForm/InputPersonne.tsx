import { Container, Text, Visual } from '../../atoms'
import { dark, white } from '../../../assets/color'
import InputContainer from './InputContainer'
import type { Voyageurs } from '../../../types/App.type'

const CATEGORIES = [
  { key: 'adultes', label: 'Adultes' },
  { key: 'enfants', label: 'Enfants' },
  { key: 'animaux', label: 'Animaux' },
] as const

type Props = {
  isInReservation: boolean
  value: Voyageurs
  setValue: (value: Voyageurs) => void
  isDisplay: boolean
  handleDisplay: (calendarDisplay: boolean | null, personneDisplay: boolean | null) => void
}

const InputPersonne = ({ isInReservation, value, setValue, isDisplay, handleDisplay }: Props) => {

  const updateData = (key: keyof Voyageurs, action: 'plus' | 'minus') => {
    setValue({ ...value, [key]: action === 'plus' ? value[key] + 1 : Math.max(0, value[key] - 1) })
  }

  const filled = CATEGORIES.filter(({ key }) => value[key] > 0)

  return (
    <Container.Column position="relative" alignSelf={isInReservation ? "stretch" : ""} height="100%">
      <Container.Row direction="row" height="100%" border={`1px solid ${dark}`} onClick={() => handleDisplay(null, !isDisplay)} padding={isInReservation ? "15px" : "12px 30px 12px 20px"} justifyContent="space-between" alignItems="center" gap="14px" alignSelf="stretch" borderRadius={isInReservation ? "10px" : "7px 6.25rem 6.25rem 7px"} mBorderRadius="7px" background={white} cursor="pointer">
        {!isInReservation &&
          <Visual.Svg label="personne" />
        }
        <Container.Column flex="1" alignItems="center">
          <Text.Paragraph alignSelf="center">
            {
              filled.length === 0 && !isInReservation
                ? "Nombre de personnes"
                : filled.map(({ key, label }) => `${value[key]} ${label}`).join(' - ')
            }
          </Text.Paragraph>
        </Container.Column>
        <Visual.Svg label="bottomArrow" />
      </Container.Row>
      <Container.Column position="absolute" top="65px" width="255px" padding="1.25rem" alignItems="flex-start" gap="15px" borderRadius="10px" background={white} display={!isDisplay ? "none" : "flex"} mDisplay={!isDisplay ? "none" : "flex"} zIndex="2">
        {CATEGORIES.map(({ key, label }) => (
          <InputContainer key={key} data={{ label, nb: value[key] }} updateData={(action) => updateData(key, action)} />
        ))}
      </Container.Column>
    </Container.Column>
  )
}

export default InputPersonne

import { useId } from 'react'
import { Container, Text, Visual } from '../../atoms'
import { dark, white } from '../../../assets/color'
import InputContainer from './InputContainer'
import type { Voyageurs } from '../../../types/App.type'
import { MAX_PER_CATEGORY } from '../../../lib/reservationParams'

const CATEGORIES = [
  { key: 'adultes', singulier: 'Adulte', pluriel: 'Adultes' },
  { key: 'enfants', singulier: 'Enfant', pluriel: 'Enfants' },
  { key: 'animaux', singulier: 'Animal', pluriel: 'Animaux' },
] as const

type Props = {
  isInReservation: boolean
  value: Voyageurs
  setValue: (value: Voyageurs) => void
  isDisplay: boolean
  handleDisplay: (calendarDisplay: boolean | null, personneDisplay: boolean | null) => void
}

const InputPersonne = ({ isInReservation, value, setValue, isDisplay, handleDisplay }: Props) => {
  const panelId = useId()

  // « 2 Adultes - 1 Enfant » : seules les catégories renseignées, accordées au nombre.
  const summary = CATEGORIES
    .filter(({ key }) => value[key] > 0)
    .map(({ key, singulier, pluriel }) => `${value[key]} ${value[key] > 1 ? pluriel : singulier}`)
    .join(' - ')

  return (
    <Container.Column position="relative" alignSelf={isInReservation ? "stretch" : ""} height="100%">
      <Container.Row
        as="button"
        type="button"
        onClick={() => handleDisplay(null, !isDisplay)}
        aria-expanded={isDisplay}
        aria-controls={panelId}
        aria-label={summary ? `Nombre de personnes : ${summary}` : 'Nombre de personnes'}
        direction="row"
        height="100%"
        border={`1px solid ${dark}`}
        padding={isInReservation ? "15px" : "12px 30px 12px 20px"}
        justifyContent="space-between"
        alignItems="center"
        gap="14px"
        alignSelf="stretch"
        borderRadius={isInReservation ? "10px" : "7px 6.25rem 6.25rem 7px"}
        mBorderRadius="7px"
        background={white}
        cursor="pointer"
      >
        {!isInReservation &&
          <Visual.Svg label="personne" />
        }
        <Container.Column flex="1" alignItems="center">
          <Text.Paragraph alignSelf="center">
            {summary || (isInReservation ? "" : "Nombre de personnes")}
          </Text.Paragraph>
        </Container.Column>
        <Visual.Svg label="bottomArrow" />
      </Container.Row>
      <Container.Column
        id={panelId}
        role="group"
        aria-label="Nombre de voyageurs"
        position="absolute"
        top="65px"
        width="255px"
        padding="1.25rem"
        alignItems="flex-start"
        gap="15px"
        borderRadius="10px"
        background={white}
        display={isDisplay ? "flex" : "none"}
        mDisplay={isDisplay ? "flex" : "none"}
        zIndex="2"
      >
        {CATEGORIES.map(({ key, pluriel }) => (
          <InputContainer
            key={key}
            label={pluriel}
            value={value[key]}
            max={MAX_PER_CATEGORY}
            onChange={(nb) => setValue({ ...value, [key]: nb })}
          />
        ))}
      </Container.Column>
    </Container.Column>
  )
}

export default InputPersonne

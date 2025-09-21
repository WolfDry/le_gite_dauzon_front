import React, { useCallback, useEffect, useState } from 'react'
import HeroBanner from '../components/molecules/HeroBanner'
import { Action, Container, Form, Text, Visual } from '../components/atoms'
import { blue, darkBlue, lightBlue, lightLightBlue, white } from '../assets/color'
import Cell from '../components/molecules/Table/Cell'
import Ligne from '../components/molecules/Table/Ligne'
import Calendrier from '../components/molecules/Calendar/Calendrier'
import Socials from '../components/molecules/Socials'
import Footer from '../components/molecules/Footer'
import { useSelector } from 'react-redux'
import InputPersonne from '../components/molecules/ReservationAccueilForm/InputPersonne'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../types/Redux.type'
import { createAskReservation, getAllReservations } from '../stores/thunks/reservationThunks'
import { AskReservation, Reservation as ReservationType } from '../types/Reservation.type'
import { Tarif } from '../types/Tarif.type'
import { getTarif } from '../services/Tarifs'

type NbPersonne = {
  label: string
  nb: number
}

const Reservation = () => {

  const dispatch = useDispatch<AppDispatch>()
  const { selectedDates, nbPersonne } = useSelector((state: any) => state.app)
  const [inputsValue, setInputsValue] = useState<AskReservation>({
    debut: null,
    fin: null,
    nbPersonne,
    email: "",
    phone: ""
  })
  const [dates, setDates] = useState([{ debut: null, fin: null }])
  const reservations = useSelector((state: any) => state.reservation.reservation)
  const [prices, setPrices] = useState<Tarif[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await getTarif()
      let data = response.map((tarif: Tarif) => ({
        ...tarif,
        desc: tarif.desc === " " ? null : tarif.desc,
        frequence: tarif.frequence.map((f) => f.toLowerCase()).join(" / ")
      }))
      data = data.sort((a: { id: number }, b: { id: number }) => a.id - b.id)
      setPrices(data)
    }
    fetchData()
  }, [])

  useEffect(() => {
    dispatch(getAllReservations())
  }, [dispatch])

  useEffect(() => {
    if (reservations) {
      const result = reservations.map((reservation: ReservationType) => {
        return { debut: reservation.debut, fin: reservation.fin }
      })
      setDates(result)
    }
  }, [reservations])

  useEffect(() => {
    if (selectedDates) {
      setInputsValue(prev => ({
        ...prev,
        ...(selectedDates.debut && { debut: selectedDates.debut }),
        ...(selectedDates.fin && { fin: selectedDates.fin })
      }))
    }
  }, [selectedDates])

  const changeInputsValue = useCallback(
    (field: keyof typeof inputsValue, value: any) => {
      setInputsValue(prev => ({
        ...prev,
        [field]: value
      }))
    },
    []
  )

  useEffect(() => {
    if (nbPersonne) {
      changeInputsValue("nbPersonne", nbPersonne)
    }
  }, [nbPersonne, changeInputsValue])


  const setNbPersonne = (data: NbPersonne[]) => {
    changeInputsValue("nbPersonne", data)
  }

  const addAskReservation = () => {
    const dataToSend = {
      ...inputsValue,
      debut: inputsValue.debut ? new Date(inputsValue.debut) : null,
      fin: inputsValue.fin ? new Date(inputsValue.fin) : null
    }

    dispatch(createAskReservation(dataToSend))
  }

  return (
    <Container.Column background={lightLightBlue}>
      <HeroBanner height="60vh" />
      <Container.Row maxWidth="100vw" marginTop="-6.875rem" padding="0 6.25rem 1.875rem 6.25rem" mPadding="0 1.25rem 2.5rem 1.25rem" justifyContent="center" mJustifyContent="flex-end" alignItems="flex-end" mAlignItems="center" alignSelf="stretch" zIndex="1">
        <Container.Column width="100%" padding="1.875rem 3.75rem" alignItems="center" gap="1.875rem" flex="1 0 0" borderRadius="1.25rem" background={white} boxShadow="4px 4px 20px 0 rgba(128, 226, 255, 0.25)">
          <Container.Row alignItems="start" gap="1.25rem" alignSelf="stretch">
            <Container.Column alignItems="flex-start" gap="7px" flex="1 0 0" alignSelf="stretch">
              <Text.Label>
                Date d'arrivée*
              </Text.Label>
              <Form.Input
                type="date"
                value={inputsValue.debut || ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeInputsValue('debut', e.target.value)}
              />
            </Container.Column>
            <Container.Column alignItems="flex-start" gap="7px" flex="1 0 0" alignSelf="stretch">
              <Text.Label>
                Date de départ*
              </Text.Label>
              <Form.Input
                type="date"
                value={inputsValue.debut || ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeInputsValue('debut', e.target.value)} />
            </Container.Column>
            <Container.Column alignItems="flex-start" gap="7px" flex="1 0 0" alignSelf="stretch">
              <Text.Label>
                Nombre de personnes*
              </Text.Label>
              <InputPersonne isInReservation={true} value={inputsValue.nbPersonne} setValue={setNbPersonne} />
            </Container.Column>
          </Container.Row>
          <Container.Row alignItems="start" gap="1.25rem" alignSelf="stretch">
            <Container.Column alignItems="flex-start" gap="7px" flex="1 0 0" alignSelf="stretch">
              <Text.Label>
                Adresse mail*
              </Text.Label>
              <Form.Input
                type="email"
                value={inputsValue.email || ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeInputsValue('email', e.target.value)} />
            </Container.Column>
            <Container.Column alignItems="flex-start" gap="7px" flex="1 0 0" alignSelf="stretch">
              <Text.Label>
                Numéro de téléphone*
              </Text.Label>
              <Form.Input
                type="tel"
                value={inputsValue.phone || ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeInputsValue('phone', e.target.value)} />
            </Container.Column>
          </Container.Row>
          <Action.Button onClick={() => addAskReservation()} background={blue}>
            Envoyer ma demande
          </Action.Button>
          <Container.Row paddingLeft="10px" justifyContent="center" alignItems="center" gap="10px" alignSelf="stretch" borderLeft={`2px solid ${blue}`}>
            <Text.Paragraph flex="1 0 0" overflow="visible">
              {`Important :
Ce formulaire vous permet de faire une demande de réservation. Il ne s’agit pas d’une réservation immédiate.
Nous vous contacterons rapidement pour vous confirmer la disponibilité du gîte aux dates souhaitées et finaliser la réservation avec vous.`}
            </Text.Paragraph>
          </Container.Row>
        </Container.Column>
      </Container.Row>
      <Container.Column mDisplay="none" maxWidth="100vw" padding="2.5rem 6.25rem" alignItems="center" gap="1.875rem">
        <Container.Column justifyContent="center" alignItems="flex-start" gap="10px" alignSelf="stretch">
          <Ligne>
            <Cell width="9vw" background={blue}>
              <Text.Paragraph fontSize="1.25rem">
                Saison
              </Text.Paragraph>
            </Cell>
            {prices.map((tarif) => (
              <Cell key={tarif.id} flex="1 0 0" background={lightBlue}>
                <Text.Paragraph fontSize="1.25rem">
                  {tarif.label}
                </Text.Paragraph>
                {tarif.desc && <Text.Paragraph fontSize="0.75rem">{tarif.desc}</Text.Paragraph>}
              </Cell>
            ))}
          </Ligne>
          <Ligne>
            <Cell width="9vw" background={blue}>
              <Text.Paragraph fontSize="1.25rem">
                Périodes
              </Text.Paragraph>
            </Cell>
            {prices.map((tarif) => (
              <Cell key={tarif.id} flex="1 0 0" background={white}>
                {tarif.date.map((period, index) => (
                  <Text.Paragraph key={index} fontSize="1">
                    {period}
                  </Text.Paragraph>
                ))}
                {tarif.vacance && (
                  <Text.Paragraph fontSize="1">
                    Vacances scolaires
                  </Text.Paragraph>
                )}
              </Cell>
            ))}
          </Ligne>
          <Ligne>
            <Cell width="9vw" background={blue}>
              <Text.Paragraph fontSize="1.25rem">
                Tarifs
              </Text.Paragraph>
            </Cell>
            {prices.map((tarif) => (
              <Cell key={tarif.id} flex="1 0 0" background={white}>
                <Text.Paragraph fontSize="1">
                  {tarif.prix} € / {tarif.frequence}
                </Text.Paragraph>
              </Cell>
            ))}
          </Ligne>
        </Container.Column>
        <Container.Row padding="5px 0 5px 10px" justifyContent="center" gap="25px" borderLeft={`4px solid ${blue}`}>
          <Visual.Image src="/assets/images/reservation/ancv.png" width="8.6vw" height="4.7rem" aspectRatio="124/75" />
          <Text.Paragraph alignSelf="center">
            Chèques vacances acceptés
          </Text.Paragraph>
        </Container.Row>
      </Container.Column>
      <Container.Column display="none" mDisplay="flex" padding="0 1.25rem" alignItems="center" gap="10px" alignSelf="stretch">
        <Container.Column justifyContent="center" alignItems="center" gap="10px" alignSelf="stretch">
          {
            prices.map((tarif, index) => (
              <Container.Column key={index} padding="10px" alignItems="center" gap="10px" alignSelf="stretch" borderRadius="10px" background={index % 2 === 0 ? darkBlue : "rgba(0, 153, 204, 0.20)"}>
                <Text.Paragraph fontSize="1.25rem" fontWeight="500" color={index % 2 === 0 ? white : null} textAlign="center">
                  {tarif.label}
                </Text.Paragraph>
                {tarif.desc !== null && (
                  <Text.Paragraph color={index % 2 === 0 ? white : null} textAlign="center">
                    {tarif.desc}
                  </Text.Paragraph>
                )}
                {tarif.date.length > 0 && (
                  <Container.Column>
                    {tarif.date.map((period, PeriodIndex) => (
                      <Text.Paragraph key={PeriodIndex} color={index % 2 === 0 ? white : null} textAlign="center">
                        {period}
                      </Text.Paragraph>
                    ))}
                    {tarif.vacance && (
                      <Text.Paragraph color={index % 2 === 0 ? white : null} textAlign="center">
                        Vacances scolaires
                      </Text.Paragraph>
                    )}
                  </Container.Column>
                )}
                <Text.Paragraph color={index % 2 === 0 ? white : null} textAlign="center">
                  {tarif.prix} € / {tarif.frequence}
                </Text.Paragraph>
              </Container.Column>
            ))
          }
        </Container.Column>
        <Container.Row direction="row" padding="5px 0 5px 10px" justifyContent="center" alignItems="center" gap="1.25rem" borderLeft={`3px solid ${blue}`}>
          <Visual.Image src="/assets/images/reservation/ancv.png" width="6.2rem" height="3.75rem" aspectRatio="33/20" />
          <Text.Paragraph alignSelf="center">
            Chèques vacances acceptés
          </Text.Paragraph>
        </Container.Row>
      </Container.Column>
      <Container.Row padding="3.75rem 6.25rem" mPadding="40px 20px 60px 20px" alignItems="center" gap="5rem" alignSelf="stretch">
        <Container.Column padding="2.5rem" justifyContent="center" alignItems="flex-start" gap="1.875rem" flex="1 0 0" borderRadius="1.25rem" background={blue}>
          <Text.Title>
            Réservation et conditions
          </Text.Title>
          <Text.Paragraph display="flex">
            {`Un acompte de 30 % est demandé à la réservation. Le solde du séjour est à régler un mois avant la date d’arrivée.
À l’entrée dans les lieux, deux cautions vous seront demandées : 400 € pour le gîte et 70 € pour le ménage, en plus de la taxe de séjour (1,65 € par jour et par personne majeure).

Le forfait ménage est de 70 € pour l’ensemble du séjour.
La location de draps est proposée à 10 € par parure et par semaine. Chaque parure inclut : 1 housse de couette, 1 drap housse, 1 drap plat, 2 taies d’oreiller et 1 taie de traversin.

Les animaux sont acceptés avec un supplément de 1 € par jour et par animal.

En juillet et août, les locations se font du samedi 15h au samedi suivant 11h.`}
          </Text.Paragraph>
        </Container.Column>
        <Container.Row direction="row" width="33vw" mWidth="100%" alignItems="flex-start" gap="1.25rem" >
          <Container.Column paddingBottom="3.75rem" alignItems="flex-start" gap="1.25rem" flex="1 0 0">
            <Visual.Image src="/assets/images/reservation/outside1.jpg" width="100%" height="18.75rem" objectFit="cover" alignSelf="stretch" borderRadius="10px" />
            <Visual.Image src="/assets/images/reservation/piscine.jpg" width="100%" height="18.75rem" objectFit="cover" alignSelf="stretch" borderRadius="10px" />
          </Container.Column>
          <Container.Column paddingTop="3.75rem" alignItems="flex-start" gap="1.25rem" flex="1 0 0">
            <Visual.Image src="/assets/images/reservation/terrasse.jpg" width="100%" height="18.75rem" objectFit="cover" alignSelf="stretch" borderRadius="10px" />
            <Visual.Image src="/assets/images/reservation/outside2.jpg" width="100%" height="18.75rem" objectFit="cover" alignSelf="stretch" borderRadius="10px" />
          </Container.Column>
        </Container.Row>
      </Container.Row>
      <Container.Column padding="3.75rem 6.25rem 6.25rem 6.25rem" mPadding="0 20px 60px 20px" justifyContent="center" alignItems="flex-start" gap="3.125rem" alignSelf="stretch">
        <Container.Column alignItems="center" gap="10px" alignSelf="stretch">
          <Container.Column alignItems="flex-start" alignSelf="stretch">
            <Text.Title>
              Calendrier des disponibilités
            </Text.Title>
            <Text.Paragraph textAlign="center">
              Mis à jour le 08 mai 2025
            </Text.Paragraph>
          </Container.Column>
          <Container.Row direction="row" justifyContent="center" alignItems="center" gap="10px">
            <Container.Row direction="row" alignItems="center">
              <Container.Row direction="row" position="relative" width="100%" padding="0.25rem 0" justifyContent="center" alignItems="center">
                <Container.Row direction="row" position="absolute" left="0" zIndex={1}>
                  <Visual.Svg label="round" width={50} height={50} />
                </Container.Row>
                <Container.Row direction="row" width="3.3rem" height="1.875rem" padding="0.25rem 0" justifyContent="center" alignItems="center" background={darkBlue} borderRadius="100px 0 0 100px">
                  <Text.Paragraph color={white} zIndex={2}>
                    7
                  </Text.Paragraph>
                </Container.Row>
                <Container.Row direction="row" width="3.3rem" height="1.875rem" padding="0.25rem 0" justifyContent="center" alignItems="center" background={darkBlue}>
                  <Text.Paragraph color={white} zIndex={2}>8</Text.Paragraph>
                </Container.Row>
                <Container.Row direction="row" width="3.3rem" height="1.875rem" padding="0.25rem 0" justifyContent="center" alignItems="center" background={darkBlue} borderRadius="0 100px 100px 0">
                  <Text.Paragraph color={white} zIndex={2}>
                    9
                  </Text.Paragraph>
                </Container.Row>
                <Container.Row direction="row" position="absolute" right="0" zIndex={1}>
                  <Visual.Svg label="round" width={50} height={50} />
                </Container.Row>
              </Container.Row>
            </Container.Row>
            <Text.Paragraph alignSelf="center">Réservé</Text.Paragraph>
          </Container.Row>
        </Container.Column>
        <Container.Column alignItems="flex-start" gap="2.2rem" alignSelf="stretch">
          <Container.Row justifyContent="space-between" alignItems="flex-start" alignSelf="stretch">
            <Calendrier
              side="none"
              isOnMobile={true}
              changeMonth={() => { }}
              setDates={() => { }}
              dates={{ debut: null, fin: null }}
              reservedDates={dates}
              currentMonth={new Date(new Date().getFullYear(), 3)}
            />
            <Calendrier
              side="none"
              isOnMobile={true}
              changeMonth={() => { }}
              setDates={() => { }}
              dates={{ debut: null, fin: null }}
              reservedDates={dates}
              currentMonth={new Date(new Date().getFullYear(), 4)}
            />
            <Calendrier
              side="none"
              isOnMobile={true}
              changeMonth={() => { }}
              setDates={() => { }}
              dates={{ debut: null, fin: null }}
              reservedDates={dates}
              currentMonth={new Date(new Date().getFullYear(), 5)}
            />
          </Container.Row>
          <Container.Row justifyContent="space-between" alignItems="flex-start" alignSelf="stretch">
            <Calendrier
              side="none"
              isOnMobile={true}
              changeMonth={() => { }}
              setDates={() => { }}
              dates={{ debut: null, fin: null }}
              reservedDates={dates}
              currentMonth={new Date(new Date().getFullYear(), 6)}
            />
            <Calendrier
              side="none"
              isOnMobile={true}
              changeMonth={() => { }}
              setDates={() => { }}
              dates={{ debut: null, fin: null }}
              reservedDates={dates}
              currentMonth={new Date(new Date().getFullYear(), 7)}
            />
            <Calendrier
              side="none"
              isOnMobile={true}
              changeMonth={() => { }}
              setDates={() => { }}
              dates={{ debut: null, fin: null }}
              reservedDates={dates}
              currentMonth={new Date(new Date().getFullYear(), 8)}
            />
          </Container.Row>
        </Container.Column>
      </Container.Column>
      <Container.Column padding="2.5rem 6.25rem" mPadding="30px 20px 30px 20px" justifyContent="center" alignItems="center" gap="1.875rem" alignSelf="stretch">
        <Socials />
      </Container.Column>
      <Footer />
    </Container.Column>
  )
}

export default Reservation
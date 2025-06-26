import React, { useEffect, useState } from 'react'
import HeroBanner from '../components/molecules/HeroBanner'
import { Action, Container, Form, Text, Visual } from '../components/atoms'
import { blue, darkBlue, lightBlue, lightLightBlue, white } from '../assets/color'
import Cell from '../components/molecules/Table/Cell'
import Ligne from '../components/molecules/Table/Ligne'
import Calendrier from '../components/molecules/Calendar/Calendrier'
import Socials from '../components/molecules/Socials'
import Footer from '../components/molecules/Footer'
import { useSelector } from 'react-redux'

const Reservation = () => {

  const { selectedDates } = useSelector((state: any) => state.app)
  const [inputsValue, setInputsValue] = useState({
    startDate: null,
    endDate: null,
    nbPersonne: 0,
    email: null,
    phone: null
  })

  useEffect(() => {
    if (selectedDates) {
      setInputsValue(prev => ({
        ...prev,
        ...(selectedDates.startDate && { startDate: selectedDates.startDate }),
        ...(selectedDates.endDate && { endDate: selectedDates.endDate })
      }))
    }
  }, [selectedDates])


  const changeInputsValue = (field: keyof typeof inputsValue, value: any) => {
    setInputsValue(prev => ({
      ...prev,
      [field]: value
    }))
  }

  return (
    <Container.Column background={lightLightBlue}>
      <HeroBanner />
      <Container.Row width="100vw" marginTop="-6.875rem" padding="0 6.25rem 1.875rem 6.25rem" justifyContent="center" alignItems="flex-end" alignSelf="stretch" zIndex="1">
        <Container.Column padding="1.875rem 3.75rem" alignItems="center" gap="1.875rem" flex="1 0 0" borderRadius="1.25rem" background={white} boxShadow="4px 4px 20px 0 rgba(128, 226, 255, 0.25)">
          <Container.Row alignItems="start" gap="1.25rem" alignSelf="stretch">
            <Container.Column alignItems="flex-start" gap="7px" flex="1 0 0">
              <Text.Label>
                Date d'arrivée*
              </Text.Label>
              <Form.Input
                type="date"
                value={inputsValue.startDate || ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeInputsValue('startDate', e.target.value)}
              />
            </Container.Column>
            <Container.Column alignItems="flex-start" gap="7px" flex="1 0 0">
              <Text.Label>
                Date de départ*
              </Text.Label>
              <Form.Input
                type="date"
                value={inputsValue.endDate || ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeInputsValue('endDate', e.target.value)} />
            </Container.Column>
            <Container.Column alignItems="flex-start" gap="7px" flex="1 0 0">
              <Text.Label>
                Nombre de personnes*
              </Text.Label>
              <Form.Input
                type="number"
                value={inputsValue.nbPersonne || ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeInputsValue('nbPersonne', e.target.value)} />
            </Container.Column>
          </Container.Row>
          <Container.Row alignItems="start" gap="1.25rem" alignSelf="stretch">
            <Container.Column alignItems="flex-start" gap="7px" flex="1 0 0">
              <Text.Label>
                Adresse mail*
              </Text.Label>
              <Form.Input
                type="email"
                value={inputsValue.email || ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeInputsValue('email', e.target.value)} />
            </Container.Column>
            <Container.Column alignItems="flex-start" gap="7px" flex="1 0 0">
              <Text.Label>
                Numéro de téléphone*
              </Text.Label>
              <Form.Input
                type="tel"
                value={inputsValue.phone || ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeInputsValue('phone', e.target.value)} />
            </Container.Column>
          </Container.Row>
          <Action.Button background={blue}>
            Envoyer ma demande
          </Action.Button>
          <Container.Row paddingLeft="10px" justifyContent="center" alignItems="center" gap="10px" alignSelf="stretch" borderLeft={`2px solid ${blue}`}>
            <Text.Paragraph flex="1 0 0">
              {`Important :
Ce formulaire vous permet de faire une demande de réservation. Il ne s’agit pas d’une réservation immédiate.
Nous vous contacterons rapidement pour vous confirmer la disponibilité du gîte aux dates souhaitées et finaliser la réservation avec vous.`}
            </Text.Paragraph>
          </Container.Row>
        </Container.Column>
      </Container.Row>
      <Container.Column width="100vw" padding="2.5rem 6.25rem" alignItems="center" gap="1.875rem">
        <Container.Column justifyContent="center" alignItems="flex-start" gap="10px" alignSelf="stretch">
          <Ligne>
            <Cell width="9vw" background={blue}>
              <Text.Paragraph fontSize="1.25rem">
                Saison
              </Text.Paragraph>
            </Cell>
            <Cell flex="1 0 0" background={lightBlue}>
              <Text.Paragraph fontSize="1.25rem">
                Haute Saison
              </Text.Paragraph>
            </Cell>
            <Cell flex="1 0 0" background={lightBlue}>
              <Text.Paragraph fontSize="1.25rem">
                Moyenne Saison
              </Text.Paragraph>
            </Cell>
            <Cell flex="1 0 0" background={lightBlue}>
              <Text.Paragraph fontSize="1.25rem">
                Basse Saison
              </Text.Paragraph>
            </Cell>
            <Cell flex="1 0 0" background={lightBlue}>
              <Text.Paragraph fontSize="1.25rem">
                Week-end
              </Text.Paragraph>
            </Cell>
            <Cell flex="1 0 0" background={lightBlue}>
              <Text.Paragraph fontSize="1.25rem">
                Taxe de séjour
              </Text.Paragraph>
              <Text.Paragraph fontSize="0.75rem">
                pour les + de 18 ans
              </Text.Paragraph>
            </Cell>
          </Ligne>
          <Ligne>
            <Cell width="9vw" background={blue}>
              <Text.Paragraph fontSize="1.25rem">
                Périodes
              </Text.Paragraph>
            </Cell>
            <Cell flex="1 0 0" background={white}>
              <Text.Paragraph fontSize="1">
                Du 05/07 au 30/08
              </Text.Paragraph>
            </Cell>
            <Cell flex="1 0 0" background={white}>
              <Text.Paragraph fontSize="1">
                {`Du 01/05 au 05/07
Du 30/08 au 27/09
Vacances scolaires`}
              </Text.Paragraph>
            </Cell>
            <Cell flex="1 0 0" background={white}>
              <Text.Paragraph fontSize="1">
              </Text.Paragraph>
            </Cell>
            <Cell flex="1 0 0" background={white}>
              <Text.Paragraph fontSize="1">
                2 jours / 1 nuit
              </Text.Paragraph>
            </Cell>
            <Cell flex="1 0 0" background={white}>
              <Text.Paragraph fontSize="1">

              </Text.Paragraph>
            </Cell>
          </Ligne>
          <Ligne>
            <Cell width="9vw" background={blue}>
              <Text.Paragraph fontSize="1.25rem">
                Tarifs
              </Text.Paragraph>
            </Cell>
            <Cell flex="1 0 0" background={white}>
              <Text.Paragraph fontSize="1">
                675 € / semaine
              </Text.Paragraph>
            </Cell>
            <Cell flex="1 0 0" background={white}>
              <Text.Paragraph fontSize="1">
                455 € / semaine
              </Text.Paragraph>
            </Cell>
            <Cell flex="1 0 0" background={white}>
              <Text.Paragraph fontSize="1">
                296 € / semaine
              </Text.Paragraph>
            </Cell>
            <Cell flex="1 0 0" background={white}>
              <Text.Paragraph fontSize="1">
                117 € / week-end
              </Text.Paragraph>
            </Cell>
            <Cell flex="1 0 0" background={white}>
              <Text.Paragraph fontSize="1">
                1.65 €/ jour/ personne
              </Text.Paragraph>
            </Cell>
          </Ligne>
        </Container.Column>
        <Container.Row padding="5px 0 5px 10px" justifyContent="center" gap="25px" borderLeft={`4px solid ${blue}`}>
          <Visual.Image src="/assets/images/reservation/ancv.png" width="8.6vw" height="4.7rem" aspectRatio="124/75" />
          <Text.Paragraph>
            Chèques vacances acceptés
          </Text.Paragraph>
        </Container.Row>
      </Container.Column>
      <Container.Row padding="3.75rem 6.25rem" alignItems="center" gap="5rem" alignSelf="stretch">
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
        <Container.Row width="33vw" alignItrems="flex-start" gap="1.25rem" >
          <Container.Column paddingBottom="3.75rem" alignItems="flex-start" gap="1.25rem" flex="1 0 0">
            <Visual.Image src="/assets/images/reservation/outside1.jpg" width="100%" height="18.75rem" objectFit="cover" alignSelf="stretch" borderRadius="10px" />
            <Visual.Image src="/assets/images/reservation/bedroom.jpg" width="100%" height="18.75rem" objectFit="cover" alignSelf="stretch" borderRadius="10px" />
          </Container.Column>
          <Container.Column paddingTop="3.75rem" alignItems="flex-start" gap="1.25rem" flex="1 0 0">
            <Visual.Image src="/assets/images/reservation/bathroom.jpg" width="100%" height="18.75rem" objectFit="cover" alignSelf="stretch" borderRadius="10px" />
            <Visual.Image src="/assets/images/reservation/outside2.jpg" width="100%" height="18.75rem" objectFit="cover" alignSelf="stretch" borderRadius="10px" />
          </Container.Column>
        </Container.Row>
      </Container.Row>
      <Container.Column padding="3.75rem 6.25rem 6.25rem 6.25rem" justifyContent="center" alignItems="flex-start" gap="3.125rem" alignSelf="stretch">
        <Container.Column alignItems="center" gap="10px" alignSelf="stretch">
          <Container.Column alignItems="flex-start" alignSelf="stretch">
            <Text.Title>
              Calendrier des disponibilités
            </Text.Title>
            <Text.Paragraph textAlign="center">
              Mis à jour le 08 mai 2025
            </Text.Paragraph>
          </Container.Column>
          <Container.Row justifyContent="center" alignItems="center" gap="10px">
            <Container.Row alignItems="center">
              <Container.Row position="relative" width="100%" padding="0.25rem 0" justifyContent="center" alignItems="center">
                <Container.Row position="absolute" left="0" zIndex={1}>
                  <Visual.Svg label="round" width={50} height={50} />
                </Container.Row>
                <Container.Row width="3.3rem" height="1.875rem" padding="0.25rem 0" justifyContent="center" alignItems="center" background={darkBlue} borderRadius="100px 0 0 100px">
                  <Text.Paragraph color={white} zIndex={2}>
                    7
                  </Text.Paragraph>
                </Container.Row>
                <Container.Row width="3.3rem" height="1.875rem" padding="0.25rem 0" justifyContent="center" alignItems="center" background={darkBlue}>
                  <Text.Paragraph color={white} zIndex={2}>8</Text.Paragraph>
                </Container.Row>
                <Container.Row width="3.3rem" height="1.875rem" padding="0.25rem 0" justifyContent="center" alignItems="center" background={darkBlue} borderRadius="0 100px 100px 0">
                  <Text.Paragraph color={white} zIndex={2}>
                    9
                  </Text.Paragraph>
                </Container.Row>
                <Container.Row position="absolute" right="0" zIndex={1}>
                  <Visual.Svg label="round" width={50} height={50} />
                </Container.Row>
              </Container.Row>
            </Container.Row>
            <Text.Paragraph>Réservé</Text.Paragraph>
          </Container.Row>
        </Container.Column>
        <Container.Column alignItems="felx-start" gap="2.2rem" alignSelf="stretch">
          <Container.Row justifyContent="space-between" alignItems="flex-start" alignSelf="stretch">
            <Calendrier
              side="none"
              isOnMobile={true}
              changeMonth={() => { }}
              setDates={() => { }}
              onDatesChange={() => { }}
              dates={{ startDate: null, endDate: null }}
              currentMonth={new Date(new Date().getFullYear(), 3)}
            />
            <Calendrier
              side="none"
              isOnMobile={true}
              changeMonth={() => { }}
              setDates={() => { }}
              onDatesChange={() => { }}
              dates={{ startDate: null, endDate: null }}
              currentMonth={new Date(new Date().getFullYear(), 4)}
            />
            <Calendrier
              side="none"
              isOnMobile={true}
              changeMonth={() => { }}
              setDates={() => { }}
              onDatesChange={() => { }}
              dates={{ startDate: null, endDate: null }}
              currentMonth={new Date(new Date().getFullYear(), 5)}
            />
          </Container.Row>
          <Container.Row justifyContent="space-between" alignItems="flex-start" alignSelf="stretch">
            <Calendrier
              side="none"
              isOnMobile={true}
              changeMonth={() => { }}
              setDates={() => { }}
              onDatesChange={() => { }}
              dates={{ startDate: null, endDate: null }}
              currentMonth={new Date(new Date().getFullYear(), 6)}
            />
            <Calendrier
              side="none"
              isOnMobile={true}
              changeMonth={() => { }}
              setDates={() => { }}
              onDatesChange={() => { }}
              dates={{ startDate: null, endDate: null }}
              currentMonth={new Date(new Date().getFullYear(), 7)}
            />
            <Calendrier
              side="none"
              isOnMobile={true}
              changeMonth={() => { }}
              setDates={() => { }}
              onDatesChange={() => { }}
              dates={{ startDate: null, endDate: null }}
              currentMonth={new Date(new Date().getFullYear(), 8)}
            />
          </Container.Row>
        </Container.Column>
      </Container.Column>
      <Container.Column padding="2.5rem 6.25rem" justifyContent="center" alignItems="center" gap="1.875rem" alignSelf="stretch">
        <Socials />
      </Container.Column>
      <Footer />
    </Container.Column>
  )
}

export default Reservation
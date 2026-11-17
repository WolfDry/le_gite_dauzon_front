import React, { useCallback, useEffect, useMemo, useState } from 'react'
import HeroBanner from '../components/molecules/HeroBanner'
import { Action, Container, Form, Text, Visual } from '../components/atoms'
import { blue, darkBlue, darkGreen, lightBlue, lightLightBlue, white } from '../assets/color'
import Cell from '../components/molecules/Table/Cell'
import Ligne from '../components/molecules/Table/Ligne'
import Calendrier from '../components/molecules/Calendar/Calendrier'
import Socials from '../components/molecules/Socials'
import Footer from '../components/molecules/Footer'
import { useSelector } from 'react-redux'
import InputPersonne from '../components/molecules/ReservationAccueilForm/InputPersonne'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../types/Redux.type'
import { getAllReservations } from '../stores/thunks/reservationThunks'
import { AskReservation, Disponibilite } from '../types/Reservation.type'
import { Tarif } from '../types/Tarif.type'
import { getTarif } from '../services/Tarifs'
import { createReservationRequest } from '../services/Reservations'
import { submitErrorMessage } from '../services/errors'
import { addMonths, format, startOfMonth } from 'date-fns'
import { fr } from 'date-fns/locale'

type NbPersonne = {
  label: string
  nb: number
}

type FieldName = 'debut' | 'fin' | 'nbPersonne' | 'nom' | 'email' | 'phone' | 'message'
type FieldErrors = Partial<Record<FieldName, string>>
type SubmitStatus = 'idle' | 'sending' | 'success' | 'error'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MESSAGE_MAX_LENGTH = 2000

const pad = (n: number) => String(n).padStart(2, '0')

/** Le calendrier montre 6 mois à partir du mois en cours, sur deux lignes de 3. */
const CALENDAR_MONTHS_SHOWN = 6
const CALENDAR_MONTHS_PER_ROW = 3
/** Décalage maximal depuis le mois en cours : on peut consulter jusqu'à 18 mois à l'avance. */
const CALENDAR_MAX_OFFSET = 12

const monthLabel = (month: Date) => {
  const label = format(month, 'MMMM yyyy', { locale: fr })
  return label.charAt(0).toUpperCase() + label.slice(1)
}

/** Date du jour du visiteur au format AAAA-MM-JJ (celui des champs date). */
const todayYmd = () => {
  const now = new Date()
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`
}

/** Mêmes règles que l'API, pour signaler l'erreur à côté du champ avant l'envoi. */
const validate = (values: AskReservation): FieldErrors => {
  const errors: FieldErrors = {}
  if (!values.debut) errors.debut = "Indiquez votre date d'arrivée."
  else if (values.debut < todayYmd()) errors.debut = "La date d'arrivée est déjà passée."
  if (!values.fin) errors.fin = 'Indiquez votre date de départ.'
  else if (values.debut && values.fin <= values.debut) errors.fin = "La date de départ doit être après la date d'arrivée."
  if ((values.nbPersonne.find((p) => p.label === 'Adultes')?.nb ?? 0) < 1) errors.nbPersonne = 'Indiquez au moins un adulte.'
  if (!values.nom.trim()) errors.nom = 'Indiquez votre prénom et votre nom.'
  else if (values.nom.trim().length > 100) errors.nom = 'Le nom est trop long (100 caractères maximum).'
  if (!EMAIL_PATTERN.test(values.email.trim()) || values.email.trim().length > 254) errors.email = 'Indiquez une adresse e-mail valide.'
  const digits = values.phone.replace(/\D/g, '')
  if (digits.length < 6 || values.phone.trim().length > 30) errors.phone = 'Indiquez un numéro de téléphone valide.'
  if ((values.message ?? '').length > MESSAGE_MAX_LENGTH) errors.message = `Le message est trop long (${MESSAGE_MAX_LENGTH} caractères maximum).`
  return errors
}

const FieldError = ({ message }: { message?: string }) =>
  message ? <Text.Paragraph color="red" fontSize="0.875rem" role="alert">{message}</Text.Paragraph> : null

const Reservation = () => {

  const dispatch = useDispatch<AppDispatch>()
  const { selectedDates, nbPersonne } = useSelector((state: any) => state.app)
  const [inputsValue, setInputsValue] = useState<AskReservation>({
    debut: '',
    fin: '',
    nbPersonne,
    nom: '',
    email: '',
    phone: '',
    message: '',
  })
  const [errors, setErrors] = useState<FieldErrors>({})
  const [status, setStatus] = useState<SubmitStatus>('idle')
  const [submitError, setSubmitError] = useState('')
  const reservations: Disponibilite[] = useSelector((state: any) => state.reservation.reservations)
  const reservationsError = useSelector((state: any) => state.reservation.error)
  const dates = useMemo(() => reservations.map(({ debut, fin }) => ({ debut, fin })), [reservations])
  const [prices, setPrices] = useState<Tarif[]>([])
  const [pricesError, setPricesError] = useState(false)
  const [isPersonneDisplay, setIsPersonneDisplay] = useState(false)
  const [monthOffset, setMonthOffset] = useState(0)
  const calendarMonths = useMemo(() => {
    const first = addMonths(startOfMonth(new Date()), monthOffset)
    return Array.from({ length: CALENDAR_MONTHS_SHOWN }, (_, i) => addMonths(first, i))
  }, [monthOffset])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getTarif()
        let data = response.map((tarif: Tarif) => ({
          ...tarif,
          desc: tarif.desc === " " ? null : tarif.desc,
          frequence: tarif.frequence.map((f) => f.toLowerCase()).join(" / ")
        }))
        data = data.sort((a: { id: number }, b: { id: number }) => a.id - b.id)
        setPrices(data)
      } catch (error) {
        console.error(error)
        setPricesError(true)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    dispatch(getAllReservations())
  }, [dispatch])

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
    (field: FieldName, value: any) => {
      setInputsValue(prev => ({
        ...prev,
        [field]: value
      }))
      setErrors(prev => ({ ...prev, [field]: undefined }))
      // Une nouvelle saisie après un envoi réussi ou échoué efface le message précédent.
      setStatus(prev => (prev === 'sending' ? prev : 'idle'))
    },
    []
  )

  // Nombre de personnes choisi sur la page d'accueil.
  useEffect(() => {
    if (nbPersonne) {
      setInputsValue(prev => ({ ...prev, nbPersonne }))
    }
  }, [nbPersonne])

  const setNbPersonne = (data: NbPersonne[]) => {
    changeInputsValue("nbPersonne", data)
  }

  const addAskReservation = async () => {
    if (status === 'sending') return

    const found = validate(inputsValue)
    setErrors(found)
    if (Object.values(found).some(Boolean)) {
      setStatus('idle')
      return
    }

    setStatus('sending')
    try {
      await createReservationRequest({
        debut: inputsValue.debut,
        fin: inputsValue.fin,
        nbPersonne: inputsValue.nbPersonne,
        nom: inputsValue.nom.trim(),
        email: inputsValue.email.trim(),
        phone: inputsValue.phone.trim(),
        message: inputsValue.message?.trim() || undefined,
      })
      setStatus('success')
      setInputsValue(prev => ({ ...prev, debut: '', fin: '', nom: '', email: '', phone: '', message: '' }))
    } catch (error) {
      console.error(error)
      setSubmitError(submitErrorMessage(error))
      setStatus('error')
    }
  }

  const handleClick = (calendarDisplay: boolean | null, personneDisplay: boolean | null) => {
    if (personneDisplay !== null) {
      setIsPersonneDisplay(personneDisplay)
    }
  }

  return (
    <Container.Column background={lightLightBlue}>
      <HeroBanner height="60vh" />
      <Container.Row maxWidth="100vw" marginTop="-6.875rem" padding="0 6.25rem 1.875rem 6.25rem" mPadding="0 1.25rem 2.5rem 1.25rem" justifyContent="center" mJustifyContent="flex-end" alignItems="flex-end" mAlignItems="center" alignSelf="stretch" zIndex="1">
        <Container.Column width="100%" padding="1.875rem 3.75rem" alignItems="center" gap="1.875rem" flex="1 0 0" borderRadius="1.25rem" background={white} boxShadow="4px 4px 20px 0 rgba(128, 226, 255, 0.25)">
          <Container.Row alignItems="start" gap="1.25rem" alignSelf="stretch">
            <Container.Column alignItems="flex-start" gap="7px" flex="1 0 0" alignSelf="stretch">
              <Text.Label htmlFor="reservation-debut">
                Date d'arrivée*
              </Text.Label>
              <Form.Input
                id="reservation-debut"
                type="date"
                min={todayYmd()}
                required
                aria-invalid={!!errors.debut}
                value={inputsValue.debut}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeInputsValue('debut', e.target.value)}
              />
              <FieldError message={errors.debut} />
            </Container.Column>
            <Container.Column alignItems="flex-start" gap="7px" flex="1 0 0" alignSelf="stretch">
              <Text.Label htmlFor="reservation-fin">
                Date de départ*
              </Text.Label>
              <Form.Input
                id="reservation-fin"
                type="date"
                min={inputsValue.debut || todayYmd()}
                required
                aria-invalid={!!errors.fin}
                value={inputsValue.fin}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeInputsValue('fin', e.target.value)} />
              <FieldError message={errors.fin} />
            </Container.Column>
            <Container.Column alignItems="flex-start" gap="7px" flex="1 0 0" alignSelf="stretch">
              <Text.Label>
                Nombre de personnes*
              </Text.Label>
              <InputPersonne isInReservation={true} value={inputsValue.nbPersonne} setValue={setNbPersonne} isDisplay={isPersonneDisplay} handleDisplay={handleClick} />
              <FieldError message={errors.nbPersonne} />
            </Container.Column>
          </Container.Row>
          <Container.Row alignItems="start" gap="1.25rem" alignSelf="stretch">
            <Container.Column alignItems="flex-start" gap="7px" flex="1 0 0" alignSelf="stretch">
              <Text.Label htmlFor="reservation-nom">
                Prénom et nom*
              </Text.Label>
              <Form.Input
                id="reservation-nom"
                type="text"
                autoComplete="name"
                maxLength={100}
                required
                aria-invalid={!!errors.nom}
                value={inputsValue.nom}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeInputsValue('nom', e.target.value)} />
              <FieldError message={errors.nom} />
            </Container.Column>
            <Container.Column alignItems="flex-start" gap="7px" flex="1 0 0" alignSelf="stretch">
              <Text.Label htmlFor="reservation-email">
                Adresse mail*
              </Text.Label>
              <Form.Input
                id="reservation-email"
                type="email"
                autoComplete="email"
                maxLength={254}
                required
                aria-invalid={!!errors.email}
                value={inputsValue.email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeInputsValue('email', e.target.value)} />
              <FieldError message={errors.email} />
            </Container.Column>
            <Container.Column alignItems="flex-start" gap="7px" flex="1 0 0" alignSelf="stretch">
              <Text.Label htmlFor="reservation-phone">
                Numéro de téléphone*
              </Text.Label>
              <Form.Input
                id="reservation-phone"
                type="tel"
                autoComplete="tel"
                maxLength={30}
                required
                aria-invalid={!!errors.phone}
                value={inputsValue.phone}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeInputsValue('phone', e.target.value)} />
              <FieldError message={errors.phone} />
            </Container.Column>
          </Container.Row>
          <Container.Column alignItems="flex-start" gap="7px" alignSelf="stretch">
            <Text.Label htmlFor="reservation-message">
              Message (facultatif)
            </Text.Label>
            <Form.TextArea
              id="reservation-message"
              maxLength={MESSAGE_MAX_LENGTH}
              placeholder="Heure d'arrivée, questions, besoins particuliers…"
              aria-invalid={!!errors.message}
              value={inputsValue.message}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => changeInputsValue('message', e.target.value)}
            />
            <FieldError message={errors.message} />
          </Container.Column>
          <Action.Button onClick={addAskReservation} disabled={status === 'sending'} aria-busy={status === 'sending'} background={blue}>
            {status === 'sending' ? "Envoi en cours…" : "Envoyer ma demande"}
          </Action.Button>
          {status === 'success' && (
            <Text.Paragraph color={darkGreen} textAlign="center" role="status">
              {`Merci, votre demande a bien été envoyée !
Nous vous recontactons rapidement pour confirmer la disponibilité du gîte.`}
            </Text.Paragraph>
          )}
          {status === 'error' && (
            <Text.Paragraph color="red" textAlign="center" role="alert">
              {submitError}
            </Text.Paragraph>
          )}
          <Container.Row paddingLeft="10px" justifyContent="center" alignItems="center" gap="10px" alignSelf="stretch" borderLeft={`2px solid ${blue}`}>
            <Text.Paragraph flex="1 0 0" overflow="visible">
              {`Important :
Ce formulaire vous permet de faire une demande de réservation. Il ne s’agit pas d’une réservation immédiate.
Nous vous contacterons rapidement pour vous confirmer la disponibilité du gîte aux dates souhaitées et finaliser la réservation avec vous.`}
            </Text.Paragraph>
          </Container.Row>
        </Container.Column>
      </Container.Row>
      {pricesError && (
        <Container.Row padding="1.25rem 6.25rem 0 6.25rem" mPadding="0 1.25rem" justifyContent="center" alignSelf="stretch">
          <Text.Paragraph color="red" textAlign="center" role="alert">
            Les tarifs n'ont pas pu être chargés. Rechargez la page, ou contactez-nous pour les connaître.
          </Text.Paragraph>
        </Container.Row>
      )}
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
          <Visual.Image src="/assets/images/reservation/ancv.webp" alt="Logo ANCV" loading="lazy" width="8.6vw" height="4.7rem" aspectRatio="124/75" />
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
          <Visual.Image src="/assets/images/reservation/ancv.webp" alt="Logo ANCV" loading="lazy" width="6.2rem" height="3.75rem" aspectRatio="33/20" />
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
            <Visual.Image src="/assets/images/reservation/outside1.webp" alt="Extérieur du gîte" loading="lazy" width="100%" height="18.75rem" objectFit="cover" alignSelf="stretch" borderRadius="10px" />
            <Visual.Image src="/assets/images/reservation/piscine.webp" alt="La piscine" loading="lazy" width="100%" height="18.75rem" objectFit="cover" alignSelf="stretch" borderRadius="10px" />
          </Container.Column>
          <Container.Column paddingTop="3.75rem" alignItems="flex-start" gap="1.25rem" flex="1 0 0">
            <Visual.Image src="/assets/images/terrasse.webp" alt="La terrasse du gîte" loading="lazy" width="100%" height="18.75rem" objectFit="cover" alignSelf="stretch" borderRadius="10px" />
            <Visual.Image src="/assets/images/reservation/outside2.webp" alt="Extérieur du gîte" loading="lazy" width="100%" height="18.75rem" objectFit="cover" alignSelf="stretch" borderRadius="10px" />
          </Container.Column>
        </Container.Row>
      </Container.Row>
      <Container.Column padding="3.75rem 6.25rem 6.25rem 6.25rem" mPadding="0 20px 60px 20px" justifyContent="center" alignItems="flex-start" gap="3.125rem" alignSelf="stretch">
        <Container.Column alignItems="center" gap="10px" alignSelf="stretch">
          <Container.Column alignItems="flex-start" alignSelf="stretch">
            <Text.Title>
              Calendrier des disponibilités
            </Text.Title>
            {reservationsError && (
              <Text.Paragraph color="red" role="alert">
                Les disponibilités n'ont pas pu être chargées : le calendrier ci-dessous peut être incomplet. Envoyez-nous votre demande, nous vous confirmerons la disponibilité.
              </Text.Paragraph>
            )}
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
          <Container.Row direction="row" justifyContent="space-between" alignItems="center" gap="10px" alignSelf="stretch">
            <Action.Button
              onClick={() => setMonthOffset(offset => Math.max(0, offset - CALENDAR_MONTHS_SHOWN))}
              disabled={monthOffset === 0}
              opacity={monthOffset === 0 ? 0.4 : null}
              padding="0.5rem 1.25rem"
              background={white}
            >
              <Visual.Svg label="leftArrow" width={10} height={15} />
              Mois précédents
            </Action.Button>
            <Container.Row mDisplay="none">
              <Text.Paragraph fontWeight="700" textAlign="center" aria-live="polite">
                {`${monthLabel(calendarMonths[0])} – ${monthLabel(calendarMonths[calendarMonths.length - 1])}`}
              </Text.Paragraph>
            </Container.Row>
            <Action.Button
              onClick={() => setMonthOffset(offset => Math.min(CALENDAR_MAX_OFFSET, offset + CALENDAR_MONTHS_SHOWN))}
              disabled={monthOffset >= CALENDAR_MAX_OFFSET}
              opacity={monthOffset >= CALENDAR_MAX_OFFSET ? 0.4 : null}
              padding="0.5rem 1.25rem"
              background={white}
            >
              Mois suivants
              <Visual.Svg label="rightArrow" width={10} height={15} />
            </Action.Button>
          </Container.Row>
          {[calendarMonths.slice(0, CALENDAR_MONTHS_PER_ROW), calendarMonths.slice(CALENDAR_MONTHS_PER_ROW)].map((row) => (
            <Container.Row key={row[0].toISOString()} justifyContent="space-between" alignItems="flex-start" alignSelf="stretch">
              {row.map((month) => (
                <Calendrier
                  key={month.toISOString()}
                  side="none"
                  isOnMobile={true}
                  changeMonth={() => { }}
                  setDates={() => { }}
                  dates={{ debut: null, fin: null }}
                  reservedDates={dates}
                  currentMonth={month}
                />
              ))}
            </Container.Row>
          ))}
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
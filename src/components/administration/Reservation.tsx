import React, { useEffect, useState } from 'react'
import { getReservation } from '../../services/Reservations'
import Calendrier from '../molecules/Calendar/Calendrier'
import { Dates } from '../../types/App.type'
import { Reservation as ReservationType } from '../../types/Reservation.type'
import { Container } from '../atoms'

type Personne = {
  nb: number
  label: string
}

type Props = {
  setPage: any
}

const Reservation = ({ setPage }: Props) => {

  const [reservations, setReservation] = useState<Array<any>>([])
  const [dates, setDates] = useState<Dates[]>([{ debut: null, fin: null }])

  useEffect(() => {
    async function fetchReservations() {
      const data = await getReservation()
      if (Array.isArray(data)) {
        data.forEach((d) => {
          d.total = 0
        })
        const result = data.map((reservation: ReservationType) => {
          return {
            debut: reservation.debut ? new Date(reservation.debut).toISOString() : null,
            fin: reservation.fin ? new Date(reservation.fin).toISOString() : null
          }
        })
        setDates(result)
        setReservation(data)
      } else {
        setReservation([])
      }
    }

    fetchReservations()
  }, [])

  return (
    <div className="admin_content">
      <div className="admin_container">
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
        <a onClick={() => setPage("reservationAdd")}>Ajouter une réservation</a>
      </div>
      <div className="table_reservation">
        <table>
          <thead>
            <tr>
              <td>
                Nom du client
              </td>
              <td>
                Prénom du client
              </td>
              <td>
                Date d'arrivée
              </td>
              <td>
                Date de départ
              </td>
              <td>
                Nombre de personnes
              </td>
              <td>
                Tarif du séjour
              </td>
              <td>
                Total du séjour
              </td>
              <td>
                Supplément(s)
              </td>
              <td>
                Actions
              </td>
            </tr>
          </thead>
          <tbody>
            {
              reservations.map((reservation) => {
                return (
                  <tr>
                    <td>
                      {reservation.client.nom}
                    </td>
                    <td>
                      {reservation.client.prenom}
                    </td>
                    <td>
                      {new Date(reservation.debut).toLocaleDateString('fr-FR')}
                    </td>
                    <td>
                      {new Date(reservation.fin).toLocaleDateString('fr-FR')}
                    </td>
                    <td>
                      {
                        reservation.nbPersonne.map((personne: Personne) => {
                          return (
                            <p>{personne.nb} {personne.label}</p>
                          )
                        })
                      }
                    </td>
                    <td>
                      {reservation.tarif} €
                    </td>
                    <td>
                      {reservation.total} €
                    </td>
                    <td>
                      {reservation.supplements.map((data: any) => {
                        return (
                          <p>{data.nb} {data.supplement.label}</p>
                        )
                      })}
                    </td>
                    <td>
                      <a href="/administration/reservation_add/<?= $r->id ?>"><i className="las la-cog"></i></a>
                      <a href="/administration/reservation_delete/<?= $r->id ?>" id="delete"><i className="las la-calendar-minus"></i></a>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Reservation
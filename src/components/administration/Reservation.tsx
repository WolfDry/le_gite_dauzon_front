import React, { useEffect, useState } from 'react'
import { getReservation } from '../../services/Reservations'
import { Supplement } from '../../types/Supplement.type'

type Personne = {
  nb: number
  label: string
}

const Reservation = () => {


  const [reservations, setReservation] = useState<Array<any>>([])

  useEffect(() => {
    async function fetchReservations() {
      const data = await getReservation()
      if (Array.isArray(data)) {
        data.forEach((d) => {
          d.total = 0
        })
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
        <div className="mois" id='adminCalendar'></div>
        <a href="/administration/reservation_add"><i className="las la-calendar-plus"></i> Ajouter une réservation</a>
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
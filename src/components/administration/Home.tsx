import React, { useEffect, useState } from 'react'
import { Visual } from '../atoms'
import { lightGrey } from '../../assets/color'
import { getReservation } from '../../services/Reservations'

type Props = {
  setPage: any
}

const Home = ({ setPage }: Props) => {

  const [reservationCount, setReservationCount] = useState(0)

  useEffect(() => {
    async function fetchReservations() {
      const data = await getReservation()
      if (Array.isArray(data)) {
        setReservationCount(data.length)
      } else {
        setReservationCount(0)
      }
    }

    fetchReservations()
  }, [])

  return (
    <div className="admin_membre">
      <h2 className="admin_title">Bienvenue sur votre espace membre</h2>
      <div id="container_admincompte" className="container">
        <div className="card">
          <h1>Réservations</h1>
          <div className="content">
            <h2>
              <Visual.Svg label="calendar" width={100} height={100} fill={lightGrey} />
            </h2>
            <h3>Réservations</h3>
            <p>Vous avez {reservationCount} réservations</p>
            <a onClick={() => setPage("reservation")}>Aller sur la page</a>
          </div>
        </div>
        <div className="card">
          <h1>Clients</h1>
          <div className="content">
            <h2>
              <Visual.Svg label="users" width={100} height={100} fill={lightGrey} />
            </h2>
            <h3>Clients</h3>
            <p>Vous avez {0} clients</p>
            <a onClick={() => setPage()}>Aller sur la page</a>
          </div>
        </div>
        <div className="card">
          <h1>Commentaires</h1>
          <div className="content">
            <h2>
              <Visual.Svg label="comment" width={100} height={100} fill={lightGrey} />
            </h2>
            <h3>Commentaires</h3>
            <p>Vous avez {0} commentaires</p>
            <a onClick={() => setPage()}>Aller sur la page</a>
          </div>
        </div>
        <div className="card">
          <h1>Utilisateurs</h1>
          <div className="content">
            <h2>
              <Visual.Svg label="defendUser" width={100} height={100} fill={lightGrey} />
            </h2>
            <h3>Utilisateurs</h3>
            <p>Vous avez {0} utilisateurs</p>
            <a onClick={() => setPage()}>Aller sur la page</a>
          </div>
        </div>
        <div className="card">
          <h1>Déconnexion</h1>
          <div className="content">
            <h2>
              <Visual.Svg label="logout" width={100} height={100} fill={lightGrey} />
            </h2>
            <h3>
              <a onClick={() => setPage()}>Déconnexion</a>
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
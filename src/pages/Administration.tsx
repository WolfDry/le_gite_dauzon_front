import React from 'react'
import "../assets/administration.css"
import { Visual } from '../components/atoms'
import { lightGrey } from '../assets/color'
import SideBar from '../components/administration/SideBar'

const Administration = () => {
  return (
    <>
      <SideBar />
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
              <p>Vous avez {0} réservations</p>
              <a href="/administration/reservation">Aller sur la page</a>
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
              <a href="/administration/client">Aller sur la page</a>
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
              <a href="/administration/commentaire">Aller sur la page</a>
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
              <a href="/administration/user">Aller sur la page</a>
            </div>
          </div>
          <div className="card">
            <h1>Déconnexion</h1>
            <div className="content">
              <h2>
                <Visual.Svg label="logout" width={100} height={100} fill={lightGrey} />
              </h2>
              <h3>
                <a href="/administration/logout">Déconnexion</a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Administration
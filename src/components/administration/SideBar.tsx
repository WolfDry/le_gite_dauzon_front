import React from 'react'
import "../../assets/administration.css"
import { Visual } from '../atoms'
import { white } from '../../assets/color'

type Props = {
  currentPage: any
  setPage: any
}

const SideBar = ({ setPage, currentPage }: Props) => {

  return (
    <div className="navigation">
      <ul>
        <li id="gite" className={`list`}>
          <a href="https://legitedauzon.fr/">
            <span className="icon">Le Gîte d'Auzon</span>
          </a>
        </li>
        <li id="home" className={currentPage == "home" ? "list active" : "list"}>
          <a onClick={() => setPage("home")}>
            <span className="icon">
              <Visual.Svg label="logo" width={60} height={60} />
            </span>
            <span className="title">Home</span>
          </a>
        </li>
        <li id="reservations" className={currentPage == "reservation" ? "list active" : "list"}>
          <a onClick={() => setPage("reservation")}>
            <span className="icon">
              <Visual.Svg label="calendar" width={60} height={60} fill={white} />
            </span>
            <span className="title">Réservations</span>
          </a>
        </li>
        <li id="clients" className={currentPage == "client" ? "list active" : "list"}>
          <a onClick={() => setPage("client")}>
            <span className="icon">
              <Visual.Svg label="users" width={60} height={60} fill={white} />
            </span>
            <span className="title">Clients</span>
          </a>
        </li>
        <li id="commentaires" className={currentPage == "commentaire" ? "list active" : "list"}>
          <a onClick={() => setPage("commentaire")}>
            <span className="icon">
              <Visual.Svg label="comment" width={60} height={60} fill={white} />
            </span>
            <span className="title">Commentaires</span>
          </a>
        </li>
        <li id="prix" className={currentPage == "prix" ? "list active" : "list"}>
          <a onClick={() => setPage("prix")}>
            <span className="icon">
              <Visual.Svg label="prix" width={60} height={60} fill={white} />
            </span>
            <span className="title">Prix</span>
          </a>
        </li>
        <li id="user" className={currentPage == "user" ? "list active" : "list"}>
          <a onClick={() => setPage("user")}>
            <span className="icon">
              <Visual.Svg label="defendUser" width={60} height={60} fill={white} />
            </span>
            <span className="title">Utilisateurs</span>
          </a>
        </li>
        <li className={currentPage == "logout" ? "list active" : "list"}>
          <a onClick={() => setPage("logout")}>
            <span className="icon">
              <Visual.Svg label="logout" width={60} height={60} fill={white} />
            </span>
            <span className="title">Déconnexion</span>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SideBar
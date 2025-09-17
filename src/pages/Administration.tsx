import React, { useState } from 'react'
import "../assets/administration.css"
import { Container } from '../components/atoms'
import SideBar from '../components/administration/SideBar'
import Home from '../components/administration/Home'
import Reservation from '../components/administration/Reservation'
import ReservationAdd from '../components/administration/ReservationAdd'
import Client from '../components/administration/Client'
import Commentaire from '../components/administration/Commentaire'
import CommentaireList from '../components/administration/CommentaireList'
import ClientAdd from '../components/administration/ClientAdd'
import CommentaireAdd from '../components/administration/CommentaireAdd'
import Prix from '../components/administration/Prix'
import PrixAdd from '../components/administration/PrixAdd'

const Administration = () => {

  const [page, setPage] = useState("home")

  return (
    <Container.Column>
      <SideBar currentPage={page} setPage={setPage} />
      {page === "home" ? <Home setPage={setPage} /> : null}
      {page === "reservation" ? <Reservation setPage={setPage} /> : null}
      {page === "reservationAdd" ? <ReservationAdd setPage={setPage} /> : null}
      {page === "client" ? <Client setPage={setPage} /> : null}
      {page === "clientAdd" ? <ClientAdd setPage={setPage} /> : null}
      {page === "commentaire" ? <Commentaire setPage={setPage} /> : null}
      {page === "commentaireListe" ? <CommentaireList setPage={setPage} /> : null}
      {page === "commentaireAdd" ? <CommentaireAdd setPage={setPage} /> : null}
      {page === "prix" ? <Prix setPage={setPage} /> : null}
      {page === "prixAdd" ? <PrixAdd setPage={setPage} /> : null}
    </Container.Column>
  )
}

export default Administration
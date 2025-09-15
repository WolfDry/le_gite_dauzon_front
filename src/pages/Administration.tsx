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

const Administration = () => {

  const [page, setPage] = useState("home")

  return (
    <Container.Column>
      <SideBar currentPage={page} setPage={setPage} />
      {page === "home" ? <Home setPage={setPage} /> : null}
      {page === "reservation" ? <Reservation setPage={setPage} /> : null}
      {page === "reservationAdd" ? <ReservationAdd setPage={setPage} /> : null}
      {page === "client" ? <Client setPage={setPage} /> : null}
      {page === "commentaire" ? <Commentaire setPage={setPage} /> : null}
      {page === "commentaireListe" ? <CommentaireList setPage={setPage} /> : null}
    </Container.Column>
  )
}

export default Administration
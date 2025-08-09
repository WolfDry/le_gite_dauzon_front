import React, { useState } from 'react'
import "../assets/administration.css"
import { Container } from '../components/atoms'
import SideBar from '../components/administration/SideBar'
import Home from '../components/administration/Home'
import Reservation from '../components/administration/Reservation'
import ReservationAdd from '../components/administration/ReservationAdd'

const Administration = () => {

  const [page, setPage] = useState("home")

  return (
    <Container.Column>
      <SideBar />
      {page === "home" ? <Home setPage={setPage} /> : null}
      {page === "reservation" ? <Reservation setPage={setPage} /> : null}
      {page === "reservationAdd" ? <ReservationAdd setPage={setPage} /> : null}
    </Container.Column>
  )
}

export default Administration
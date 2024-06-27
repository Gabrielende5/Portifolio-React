import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from "../../components/NavBar/NavBar"
import Contato from "../../components/Contato/Contato"
    // Esse "Outlet" faz com que esse seja sempre repetido, tipo cada pagina vai ter o mesma navbar que estiver nesse Layout
function Layout() {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Contato></Contato>
    </div>
  )
}

export default Layout
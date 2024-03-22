import React from 'react'
import { Outlet } from 'react-router-dom'
import Topbar from '../Topbar/Topbar'
import Footer from '../Footer/Footer'

export default function Layout() {
 
 
 return <>

        <Topbar/>

      <Outlet></Outlet>

      <Footer/>

  </>
}

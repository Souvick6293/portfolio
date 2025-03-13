"use client";

import React, { useState } from 'react'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'

const Navbar = () => {
    const[showNav, setShowNav]=useState(false)

    const showNavHandler = () => setShowNav(true)
    const closeNavHandler = () => setShowNav(false)

  return (
    <div>
        <DesktopNav openNav={showNavHandler}/>
        <MobileNav showNav={showNav} closeNav={closeNavHandler}/>
    </div>
  )
}

export default Navbar
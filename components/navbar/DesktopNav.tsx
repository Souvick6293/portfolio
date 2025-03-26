"use client"
import { navLinks } from '@/constants/constands'
import Image from 'next/image';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { RiMenuUnfoldFill } from "react-icons/ri";

type Props = {
    openNav:()=> void
}

const DesktopNav = ({openNav}:Props) => {

    const[navBg, setNavBg]=useState(false)

    useEffect(()=>{
        const navBgHandler=()=>{
            if(window.scrollY >= 90){
                setNavBg(true)
            }if(window.scrollY < 90){
                setNavBg(false)
            }
        }

        window.addEventListener("scroll", navBgHandler)

        return ()=>{
            window.removeEventListener("scroll", navBgHandler)
        };
    },[])
  return (
    <div className={`fixed ${navBg ? "bg-gradient-to-br from-[#a14eaa] to-[#4c1d95] " : "fixed"} h-[10vh] z-[10]  w-full transition-all duration-200`}>
        <div className="h-full flex justify-between items-center mx-auto container">
            <div>
                <Link href="/" className=''>
                    <Image src={'/assets/my-logo.png'} alt='my-logo' width={150} height={60}/>
                </Link>
            </div>

            {/* Nav Link area  */}
            <div className='hidden lg:flex items-center space-x-10'>
               {
                navLinks.map((navlink)=>{
                    return (
                        <a key={navlink.id} href={navlink.url}>
                            <ul>
                                <li className='nav-link'>{navlink.label}</li>
                            </ul>
                        </a>
                    )
                })
               }
            </div>
            <RiMenuUnfoldFill onClick={openNav} className='w-8 h-8 lg:hidden'/>
        </div>
    </div>
  )
}

export default DesktopNav
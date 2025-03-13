import { navLinks } from '@/constants/constands'
import Link from 'next/link'
import React from 'react'
import { CgClose } from 'react-icons/cg'

type Props = {
    showNav:boolean;
    closeNav:()=>void
}

const MobileNav = ({closeNav, showNav}:Props) => {

    const navOpen = showNav?'translate-x-0':'translate-x-[-100%]'

  return (
    <div>
    <div className={`fixed ${navOpen} transform transition-all duration-500 inset-0 z-[1000] bg-black opacity-70 w-full h-screen`}></div>
        <div className={`fixed ${navOpen} transform transition-all duration-500 delay-300 flex flex-col justify-center items-center h-full w-[80%] sm:w-[60%] bg-[#a14eaa] space-y-6 z-[1000]`}>
            {
                navLinks.map((navlink)=>{
                    return (
                        <Link key={navlink.id} href={navlink.url}>
                            <ul>
                                <li className='nav-link text-[20px]'>{navlink.label}</li>
                            </ul>
                        </Link>
                    )
                })
               }
               <CgClose onClick={closeNav} className='absolute top-[25px] right-[20px] w-8 h-8 text-white'/>
        </div>
    </div>
  )
}

export default MobileNav
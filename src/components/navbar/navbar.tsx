import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const Navbar = () => {
    return(
        <header>
            <div className='topnav'>
                <ul className='nav'>
                    <Image 
                        src='/' 
                        alt='insert hade here' 
                        width={20}
                        height={20} 
                    />
                    <li className='buttons'>
                        <Link href={'/'} legacyBehavior><a className='link'>Home</a></Link>
                    </li>
                    <li className='buttons'>
                        <Link href={'/services'} legacyBehavior><a className='link'>Services</a></Link>
                    </li>
                    <li className='buttons'>
                        <Link href={'/make-appointment'} legacyBehavior><a className='link'>Make an appoinment</a></Link>
                    </li>
                    <li className='buttons'>
                        <Link href={'/about-us'} legacyBehavior><a className='link'>About us</a></Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}
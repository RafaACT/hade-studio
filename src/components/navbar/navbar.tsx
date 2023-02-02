import React from 'react'
import Link from 'next/link'

export const Navbar = () => {
    return(
        <header>
            <div className='topnav'>
                <ul className='nav'>
                    <li className='buttons'>
                        <Link href={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link href={'/Services'}>Services</Link>
                    </li>
                    <li>
                        <Link href={'/About us'}>About us</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}
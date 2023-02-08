import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export const Navbar = () => {

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(prevState => !prevState);
    };

    return(
        <header>
            <div className='topnav'>
                <Image 
                    src='/hade-studio2.png' 
                    alt='insert hade here' 
                    width={60}
                    height={60} 
                />
                <ul className={isClicked ? "nav" : 'nav active'}>
                    <Link href={'/'} legacyBehavior>
                        <li className='buttons' onClick={handleClick}>
                            <a className='link'>Home</a>
                        </li>
                    </Link>
                    <Link href={'/services'} legacyBehavior>
                        <li className='buttons' onClick={handleClick}>
                            <a className='link'>Services</a>
                        </li>
                    </Link>
                    <Link href={'https://hadesstudio.setmore.com/?instant_experiences_enabled=true'} legacyBehavior>
                        <li className='buttons' onClick={handleClick}>
                            <a className='link'>Appointments</a>
                        </li>
                    </Link>
                    <Link href={'/about-us'} legacyBehavior>
                        <li className='buttons' onClick={handleClick}>
                            <a className='link'>About us</a>
                        </li>
                    </Link>
                </ul>
                <div className='mobile' onClick={handleClick}>
                    {isClicked ? <CloseIcon className='icon'/>: <MenuIcon className='icon'/> }
                </div>
            </div>
        </header>
    )
}
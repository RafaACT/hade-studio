import React from "react";
import { Grid } from "@mui/material";
import Image from "next/image";
import InstagramIcon from '@mui/icons-material/Instagram';
import IconButton from "@mui/material";
import Link from "next/link";

export default function About() {
    return(
        <div className="about-container">
            <h1 className='title'>Ana's history</h1>
            <Grid container className="container">
                <Grid item md={4}>
                <Image 
                    className='logo'
                    src='/hade-studio2.png' 
                    alt='insert hade here' 
                    width={300}
                    height={300}/>
                </Grid>
                <Grid item md={4} className='box'>
                    <p>venezuelan inmigrant, maybe love history bla bla bla Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut doloribus inventore consequuntur commodi voluptatem quis nobis beatae quaerat, sint modi exercitationem id pariatur error eligendi at aliquid quidem, obcaecati tenetur.</p>
                </Grid>
            </Grid>
            <Grid container className="container">
                <Grid item md={4} className='box'>
                <h1>Passion</h1> 
                <Image 
                    className='logo'
                    src='/hade-studio2.png' 
                    alt='insert hade here' 
                    width={300}
                    height={300}/>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, pariatur. Dicta, aspernatur, est illum nisi cum dignissimos quam quidem magnam odit nam error assumenda tempore quaerat debitis autem vitae sunt.</p>
                </Grid>
                <Grid item md={4} className='box'>
                    <h1>Milestones</h1>
                <Image 
                    className='logo'
                    src='/hade-studio2.png' 
                    alt='insert hade here' 
                    width={300}
                    height={300}/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur totam repellendus hic iste, nostrum molestias porro! Suscipit exercitationem ut sed aut nulla quisquam iure eum dolorum, neque dicta modi sapiente!</p>
                </Grid>
            </Grid>
            <h1>Contact me!</h1>
            <Link href={'https://instagram.com/hade_sstudio?igshid=YmMyMTA2M2Y='} legacyBehavior>
                <InstagramIcon className="icon"/>
            </Link>
        </div>
    )   
}
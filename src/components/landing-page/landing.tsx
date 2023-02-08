import React from "react";
import Image from "next/image";
import { Content } from './content/content'

export default function Landing(image:any) {
    return(
        <div className="landing">
            <Image 
                className='logo'
                src='/hade-studio2.png' 
                alt='insert hade here' 
                width={3375}
                height={3329}/>
            <Content image={image.image}/>
        </div>
    )
}
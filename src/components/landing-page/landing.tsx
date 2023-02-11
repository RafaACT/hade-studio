import React from "react";
import Image from "next/image";
import { Content } from './content/content'

export default function Landing({job, studio}:any) {
    return(
        <div className="landing">
            <Image 
                className='logo'
                src='/hade-studio2.png' 
                alt='insert hade here' 
                width={3375}
                height={3329}/>
            <div>
                <Content data={job[0]}/>
                <Content data={studio[0]}/>
            </div>
        </div>
    )
}
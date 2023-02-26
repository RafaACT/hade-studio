import React from "react";
import { Content } from './content/content'
import About from "../about-us/about";
import { Main } from "@/interfaces/interfaces";

export default function Landing({job, studio}:Main) {
    return(
        <div className="landing-container">
                <Content data={job}/>
                <Content data={studio}/>
                <About />
        </div>
    )
}
import React from "react";
import Image from "next/image";
import { Grid } from "@mui/material";

export const Services = ({data}:any) => {
    return(
        <div className="service-container">
            {data.map((service: any) => (
                <div className="box">
                    <Image src={service.image} alt={'doesnt work'} width={30} height={30} className={'image'}/>
                    <h2 className="name">{service.name}</h2>
                    <p className="description">{service.description}</p>
                    <h3 className="price">{service.price}</h3>
                </div>
            )
            )}  
        </div>
    )
}
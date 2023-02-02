import React from "react";
import Image from "next/image";

export const Services = ({data}:any) => {
    return(
        <div className="service-container">
            {data.map((service: any) => (
                <div className="box">
                    <Image src={service.image} alt={'doesnt work'} width={30} height={30} />
                </div>
            )
            )}  
        </div>
    )
}
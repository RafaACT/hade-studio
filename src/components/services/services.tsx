import React from "react";
import Image from "next/image";
import { Grid } from "@mui/material";

export const Services = ({data}:any) => {
    return(
        <div className="service-container">
            {data.map((service: any) => (
                <Grid container className="box">
                    <Grid item sm={4} className={'image'}>
                        <Image src={service.image} alt={'doesnt work'} width={100} height={100} className={'image'}/>
                    </Grid>
                    <Grid item sm={8}>
                        <Grid container className='description'>
                            <Grid>
                                <h2 className="name">{service.name}</h2>
                            </Grid>
                            <Grid>
                                <p>{service.description}</p>
                            </Grid>
                            <Grid>
                                <h3 className="price">{service.price}</h3>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            )
            )}  
        </div>
    )
}
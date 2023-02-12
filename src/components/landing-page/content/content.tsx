import React from "react";
import { Grid } from "@mui/material";
import ImageSlider from "../image_slider/image_slider";

export const Content = ({data}:any) => {

    return(
        <div className="odd">
            <Grid container className="content">
                <Grid item md={4} className='slider' >
                    <ImageSlider images={data.images} />
                </Grid>
                <Grid item md={4} className='description'>
                    <h3>{data.name}</h3>
                    <p>{data.description}</p>
                </Grid>
            </Grid>
        </div>
    )
}


//make about us
//investigate professional pictures, create transition

//about us
//my history, inmigrant from venezuela came to ireland to work and bla bla bla
//why eyesbros, my passion, my dream, i do this because i loved it all y life
//some milestones or award of the business,
//contact us
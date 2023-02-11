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


import React from "react";
import { Grid } from "@mui/material";
import ImageSlider from "../image_slider/image_slider";

export const Content = (image:any) => {
    return(
        <Grid container className="content">
            <Grid item sm={4} >
                <ImageSlider images={image.image} />
            </Grid>
            <Grid item sm={4} >
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti dolore similique id tempore impedit amet consequuntur reprehenderit nesciunt, laborum odio in nostrum blanditiis nisi cum cumque ipsum velit culpa veritatis.</p>
            </Grid>
        </Grid>
    )
}
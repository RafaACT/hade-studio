import React from "react";
import {Navbar} from "../navbar/navbar";
import { Footer } from "../footer/footer";

export const Main = ({children}:any) => {

    return(
        <>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}
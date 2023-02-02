import React from "react";
import {Navbar} from "../navbar/navbar";

export const Main = ({children}:any) => {

    return(
        <>
            <Navbar />
            <main>
                {children}
            </main>
            <footer>
                <p>© 2022 Hade Studio - A project built with Next.JS</p>
            </footer>
        </>
    )
}
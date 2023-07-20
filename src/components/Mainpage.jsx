import React, { useEffect } from "react";
import Hero from "./Hero";
import Projects from "./Projects";


const Mainpage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <Hero />
            <Projects />
        </>

    )
}

export default Mainpage
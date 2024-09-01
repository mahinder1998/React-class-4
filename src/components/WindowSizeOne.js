import { useState, useEffect } from "react";

function WindowSizeOne(){
    const windowWidth = window.innerWidth;
    const[width,setWidthone] = useState(windowWidth);

    useEffect(()=>{
        window.addEventListener("resize", ()=>{
            setWidthone(windowWidth)
        })
    })

    return(
        <p>window width is: {width} </p>
    )
}

export default WindowSizeOne;
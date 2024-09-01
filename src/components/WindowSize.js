import { useState } from "react";

function WindowSize(){
    const windowWidth = `${window.innerWidth}px`;
    const[size, updateSize] = useState(windowWidth);
    window.addEventListener("resize", ()=>{
        updateSize(`${window.innerWidth}px`)
    })

    return(
        <div className="c-wrap">
            <p>This is windiw size</p>
            <div className="windowSize">{size}</div>
        </div>
    )
}

export default WindowSize;
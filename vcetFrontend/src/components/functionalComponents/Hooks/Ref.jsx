import { useEffect, useState, useRef } from "react";

const Ref = () => {
    const [chromePage,movingChromePage] = useState("");
    var prevRender = useRef();
    useEffect(()=>{
        prevRender.current = chromePage;
    },[chromePage])
    return(
        <div>
            <h1>Enter a website name</h1>
            <input type="text" onChange={(e)=>movingChromePage(e.target.value)} />
            <h1>The current page rendered is {chromePage}</h1>
            <h2>The previous page rendered is {prevRender.current}</h2>
        </div>
    )
}
export default Ref;
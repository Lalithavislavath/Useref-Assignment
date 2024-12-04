import { useEffect, useRef, useState } from "react"

const Counter=()=>{
    const prevCountRef= useRef(0)
    const[count,setCount]= useState(0)
    const handleInc=()=>{
        setCount(count+1)  
    }
    useEffect(()=>{
     prevCountRef.current = count
    },[count])
    return(
        <div>
        <p>Count={count}</p>
        <button onClick={handleInc}>increment</button>
        <p>previous Count Value={prevCountRef.current}</p>
        </div>
    )
}
export default Counter
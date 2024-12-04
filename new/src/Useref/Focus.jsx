import { useRef } from "react"
const Focus =()=>{
    const inputRef= useRef(null)
    const handleFocus=()=>{
        inputRef.current.Focus()
    }
    return(
        <div>
            <input type="text" placeholder="Clicks on button" ref={inputRef}/>
            <button onClick={handleFocus}>Focus Input</button>
        </div>
    )
}
export default Focus
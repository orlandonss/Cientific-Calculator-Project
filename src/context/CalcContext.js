import { createContext } from "react"
import { useState } from "react"

export const CalcContext = createContext()

const CalcProvider = ({children})=>{
    const [calc,setCalc]=useState({
        sign:""
        ,num:0
        ,res:0
    });

    const providerValue={calc,setCalc}
    return(
        <CalcContext value={providerValue}>
            {children}
        </CalcContext>
    )
}

export default CalcProvider
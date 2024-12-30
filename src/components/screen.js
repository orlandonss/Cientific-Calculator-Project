import { useContext } from "react"
import { CalcContext } from "../context/CalcContext"
import { Textfit } from "react-textfit"

const Screen = () =>{
    const {calc}=useContext(CalcContext)
    return(
        <div className="Screen" max={70} mode="single">{calc.num? calc.num: calc.res}</div>
    )
}
export default Screen
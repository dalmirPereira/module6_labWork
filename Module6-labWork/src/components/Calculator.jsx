//------------------- Module 6: Lab Exercise 6 ------------------------

import { useState } from "react"
import Operator from "./Calculator/Operator"

function Calculator() {

    const [ result, setResult ] = useState(0)

    const updateResult = (result) => {
        setResult(result);
    }

    return (
        <>
            <p className="calculator">{result}</p>

            <Operator handleResult={updateResult}/>
        </>
    )
}

export default Calculator;
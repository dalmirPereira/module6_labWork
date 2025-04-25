//------------------- Module 6: Lab Exercise 6 ------------------------
import { useState } from "react"

function Operator({ handleResult }) {

    const [ calculator, setCalculator ] = useState({ firstNumber: 0, secondNumber: 0, operator: '+' });
    
    const result = () => {
        let firstNumber = parseFloat(calculator.firstNumber);
        let secondNumber = parseFloat(calculator.firstNumber);

        let result = 0

        switch (calculator.operator) {
            case "+":
                result = firstNumber + secondNumber;
                break;
            case "-":
                result = firstNumber - secondNumber;
                break;
            case "/":
                result = firstNumber / secondNumber;
                break;
            case "*":
                result = firstNumber * secondNumber;
                break;
        }
         
        return result;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleResult(result());
        setCalculator({ firstNumber: 0, secondNumber: 0, operator: '' });
    }

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <label> First Number:
                        <input name="firstNumber" value={calculator.firstNumber}
                        onChange={(e) => setCalculator({ ...calculator, [e.target.name]: e.target.value })}/>
                    </label><br />
                    <label> Second Number:
                        <input name="secondNumber" value={calculator.secondNumber}
                        onChange={(e) => setCalculator({ ...calculator, [e.target.name]: e.target.value })}/>
                    </label><br />
                    <label> Operator:
                        <select id="operator" name="operator" value={calculator.operator} 
                        onChange={(e) => setCalculator({ ...calculator, [e.target.name]: e.target.value })}>
                            <option value="+">+</option>
                            <option value="-">-</option>
                            <option value="/">/</option>
                            <option value="*">*</option>
                        </select>
                    </label><br />
                    <button>Calculate</button>
                </form>
            </div>
        </>
    )
}

export default Operator;
// Import state
import { useState } from "react";

// Function
const App = () => {

  // State
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["/", "*", "+", "-", ".", "="];

  const updateCalculator = (value) => {


    // Prevent from using multiple operators at once.
    if (ops.includes(value) && calc === '' || ops.includes(value) && ops.includes(calc.slice(-1))) {
      return;
    }

    setCalc(calc + value);


    if (!ops.includes(value)) {
      // What ever string we pass it will evaluate for example 5+5=10 10+10=20 and so on...
      // toString() important so its all string related.
      setResult(eval(calc + value).toString());
    }
  }


  // Create function to auto generate 1 to 9 buttons
  const autoDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      // We use toString() so we dont get later problems
      digits.push(<button onClick={() => updateCalculator(i.toString())} key={i}>{i}</button>)
    }

    return digits;
  }

  // When pressees equals
  const calculateSum = () => {
    setCalc(eval(calc).toString());
  }


  // If wants to delete
  const deleteSum = () => {
    if (calc == "") {
      return;
    }

    const value = calc.slice(0, -1);

    setCalc(value);
  }


  return (
    <div className="App">
        <h1 className="bigText">React Calculator 2022</h1>
        <div className="calculator">
          <div className="display">
            {/* If theres no value in calc will be displayed as 0 */}
            {/* If theres a value will show it if no wont show it */}

            {/* We can have results uncommented and near by side show the results of adding two numbers */}
            {result ? <span>{/* ({result}) */}</span> : ""}{calc || "0"}
          </div>

          <div className="operators">
            {/* Update */}
            <button onClick={() => updateCalculator("/")}>/</button>
            <button onClick={() => updateCalculator("*")}>*</button>
            <button onClick={() => updateCalculator("+")}>+</button>
            <button onClick={() => updateCalculator("-")}>-</button>
            <button onClick={deleteSum}>DEL</button>
          </div>

          <div className="digits">
            {autoDigits()}
            <button onClick={() => updateCalculator("0")}>0</button>
            <button onClick={() => updateCalculator(".")}>.</button>
            <button onClick={calculateSum}>=</button>
          </div>
        </div>
    </div>
  )
}

export default App;

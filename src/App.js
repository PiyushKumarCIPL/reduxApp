import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {incNumber,decNumber} from "./actions/index";
function App() {
  const myState = useSelector((state) => state.ChangeTheNumber);
  const dispach = useDispatch();
  return (
    <div className="App">
      <h2>Increament and Decreament App</h2>
      <h4>Using React and Redux</h4>

      <div>
        <button onClick={() => dispach(decNumber())}>-</button>
        <input value={myState}/>
        <button onClick={() => dispach(incNumber())}>+</button>
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";

function App() {
   const [count, setCount] = useState(0)
   const inc = () => {
    setCount(count+1)
   };

   const dec = () => {
    setCount(count-1)
   };
   return (
      <>
         <h1>Aditya Bhatt</h1>
         <h2>Counter value: {count}</h2>
         <button onClick={inc}>Increament</button>
         <br />
         <button onClick={dec}>Decrement</button>
         <div className="card"></div>
      </>
   );
}

export default App;

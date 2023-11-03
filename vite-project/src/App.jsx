import { useState } from "react";
import "./App.css";

function App() {
   const [color, setColor] = useState("gray");

   return (
      <div
         className="w-full h-screen duration-100"
         style={{ backgroundColor: color }}
      >
         <div className="fixed bottom-4 justify-center inset-x-0 px-2">
            <div className="flex flex-wrap justify-center gap-3 shadow-black px-2 py-3 rounded-md">
               <button
               onClick={()=> setColor('red')}
                  className="outline-none px-2 rounded-lg shadow-md shadow-yellow-100"
                  style={{ backgroundColor: "red" }}
               >
                  Red
               </button>
               <button
               onClick={()=> setColor('green')}
                  className="outline-none px-2 rounded-lg shadow-md shadow-yellow-100"
                  style={{ backgroundColor: "Green" }}
               >
                  Green
               </button>
               <button
               onClick={()=> setColor('blue')}
                  className="outline-none px-2 rounded-lg shadow-md shadow-yellow-100"
                  style={{ backgroundColor: "Blue" }}
               >
                  Blue
               </button>
            </div>
         </div>
      </div>
   );
}

export default App;

import { useState, useEffect } from "react";
 
 function Contador() {
     const [count, setCount] = useState(0);
 
     useEffect(() => {
         if(count > 10){
             alert("¡Has superado el límite de 10, reiniciando contador!");
             setCount(0);
         }
     }, [count]);
 
     return (
         <div className="card" style={{ textAlign: 'center' }}>
             <button onClick={() => setCount(count + 1)}>Count {count}</button>
         </div>
     );
 }
 
 export default Contador;
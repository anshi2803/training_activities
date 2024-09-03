import { useState } from "react";

function Statedemo() {
    const [name, setName]= useState('Olam')
    const changename= ()=>{
        setName("Mindsprint")
    }
    return ( 
        <div>
            <h3>Name : {name}</h3>
            <button onClick={changename}>Click</button> 
        </div>
     );
}

export default Statedemo;

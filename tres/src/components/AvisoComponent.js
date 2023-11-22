import React,{useEffect} from 'react'

export const AvisoComponent = () => {
 
 
 useEffect(()=>{

            alert("componente cargado");
 
 
           return()=>{
                 
                alert("COMPONENTE DESMONTADO");
           };
 
 
        }, []);



 
 
    return (
    <div>
        <hr/>
       <h1> AvisoComponent superado los 20 </h1>
        <button onClick={e=>{alert("welcome")}}>mostrar componente</button>
        
        </div>
  )
}

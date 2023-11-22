import React, {useEffect, useState} from 'react'
import { AvisoComponent } from './AvisoComponent';

export const PruebasComponents = () => {
  
  
  const[usuario,setUsuario]=useState("josito");
  const[fecha,setFecha]=useState("01-01-1998");
  const[contador,setContador]=useState(0);
  
  const modUsuario=e=>{

    setUsuario(e.target.value);
  };

  const cambiarfecha=e=>{

      setFecha(Date.now());
  };


   useEffect(()=>{

         console.log("cargaste el componente");
   });

   useEffect(()=>{

    console.log("cargaste el componente una vez");
},[]);

useEffect(()=>{

    

    setContador(contador+1);
    console.log("cargaste el componente usuario: "+contador);

},[usuario]);

useEffect(()=>{

    

    setContador(contador+1);
    console.log("cargaste el componente fecha: "+contador);

},[fecha]);

  

    return (
    <div>
        <h1>El efecto</h1>
        <strong className={contador >=10 ? 'label label-green': 'label'}>{usuario}</strong>
        <strong>{fecha}</strong>

        <form>
        <input type='text' onChange={modUsuario} placeholder='cambiar nombre'></input>
        <button onClick={cambiarfecha}>cambiar fecha</button>
        </form>

        {contador >= 20 && <AvisoComponent/>}
        {usuario=="ANGELA" && <AvisoComponent/>}
    </div>
  )
}

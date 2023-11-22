import React, { useEffect, useState,useRef } from 'react'

export const Ejemplo = () => {
  
  
const[numeroSaludo,setNumeroSaludo]= useState(0);
const saludosEnCola=useRef (numeroSaludo);

useEffect (()=>{
    saludosEnCola.current=numeroSaludo
    setTimeout(()=>{
    console.log("mensajes en cola: "+numeroSaludo);
}, 2000)
},[numeroSaludo])



const enviarSaludo= e =>{
    console.log("saludo enviado");
    setNumeroSaludo(numeroSaludo +1);

}

    return (
    <div>
        
      <h1>Ejemplo</h1> 

      <h2>Saludos enviados: {numeroSaludo}</h2>

      <button onClick={enviarSaludo}>Enviar saludo</button>

      <hr/>
        
        </div>
  )
}

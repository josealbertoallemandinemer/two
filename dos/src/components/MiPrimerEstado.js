import React, {useState} from 'react';

export const MiPrimerEstado = () => {


  /* let nombre="jaan";
   const cambiarnombre= e =>{

        nombre="angela";
   };*/

   const[nombre, SetNombre]= useState("jaan");

   const cambiarnombre= (e,nombreFijo) =>{

    SetNombre(nombreFijo);
};


  return (
    <div>
        
        <h3>MiPrimerEstado</h3>
        <strong className={nombre.length>= 4? 'verde': 'rojo'}>{nombre}</strong>
        &nbsp;
        <button onClick={e=>cambiarnombre(e,"angela")}>cambiar nombre a angela</button>

     <input type='text' onKeyUp={e=> cambiarnombre(e,e.target.value)} placeholder='cambia el nombre'></input>
     &nbsp;


        </div>
  )
}

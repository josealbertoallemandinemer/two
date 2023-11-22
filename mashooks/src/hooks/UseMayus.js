import { useState } from "react";

export const useMayus=(texto) => {

  
  
  
  /*  const mayusculas=(valor="")=>{

    console.log(texto+valor);
  }*/

  const [miTexto, setMiTexto]= useState(texto);
  

  const mayusculas = () =>{

      setMiTexto(texto.toUpperCase());
  }

  const minusculas = () =>{

    setMiTexto(texto.toLowerCase());
  }

  const concatenar = (added) =>{
    
    setMiTexto( texto+added) ;
    
  }





    return{
                  estado: miTexto,
                  mayusculas,
                  minusculas,
                  concatenar
    };
}
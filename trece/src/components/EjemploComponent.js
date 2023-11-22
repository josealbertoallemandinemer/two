import React, {useEffect, useLayoutEffect, useRef, useState} from 'react'

export const EjemploComponent = () => {
  
  
 
  const [mostrar, setMostrar]= useState(false);
 
 const caja= useRef();
 const boton= useRef();


    useLayoutEffect(()=>{

    console.log("componente cargado de useLayoutEffect");
    /*let caja= document.querySelector("#caja");
    caja.innerHTML="hola";
    console.log(caja.getBoundingClientRect());*/
  }, []);

  useEffect(()=>{

    console.log("componente cargado de useEffect");

    if(caja.current==null) return

    const{bottom}= boton.current.getBoundingClientRect();

    console.log(bottom);

    caja.current.style.marginTop= `${bottom+45}px`
    caja.current.style.marginLeft= `${bottom+45}px`
   /* let caja= document.querySelector("#caja");
    caja.innerHTML="hola 2";
    console.log(caja.getBoundingClientRect());*/
  }, [mostrar]);
  
    return (

    <div>
        
        <h1>Ejemplo useEffect y useLyautEffect</h1>

        <button ref={boton} onClick={()=> setMostrar(prev=>!prev)}>Mostrar mensaje</button>


{mostrar && (

<div id='caja' ref={caja}>
                   
holu soy un mensaje {mostrar}

</div>

)}
       
        
        </div>
  )
}

import React, {useState, useRef,useEffect, useCallback} from 'react'
import { Empleados } from './Empleados'

export const Gestion = () => {
  
  
  const [nombre, setNombre]= useState("");
  const [pagina, setPagina]= useState(1);

  useEffect(()=>{
     
    console.log("la vista se ha renderizado");

  });

  const gestorInput = useRef();

  const asignarGestor= e=>{
    console.log(gestorInput.current.value);
    setNombre(gestorInput.current.value);     /*o usando e.target.value si no tuvieramos el useRef*/
  }

  useEffect(()=>{
    console.log("vista de gestion actualizada!!!!!!");
  }, [nombre,pagina]);
 
 const mostrarMensaje= useCallback(()=>{
    console.log("holu soy mensaju de componenteu empleadu");
 }, [pagina]);
 
  
    return (
    <div>
        <p>Mostrando la pagina: {pagina}</p>
        <h1>Nombre gestor: {nombre}</h1>

        <input type='text' ref={gestorInput} onChange={asignarGestor} placeholder='inroduce nombre de gestor' />

        <h2>Listado de empleados: </h2>
    
    <p>Usuarios gestionados por {nombre} de jsonplaceholder....</p>



    <button onClick={()=>{setPagina(1)}}>pagina 1</button>  
    <button onClick={()=>{setPagina(2)}}>pagina 2</button>

    <Empleados pagina={pagina} mensaje={mostrarMensaje}></Empleados>
    
    
    </div>
  )
}

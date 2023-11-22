import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {trabajos} from '../data/Trabajos';

export const Proyecto = () => {

   const [proyecto, setProyecto]= useState({});
   const params= useParams();

   useEffect(()=>{

    let proyecto = trabajos.filter(trabajo=> trabajo.id===params.id);
    setProyecto(proyecto[0]);
    console.log(proyecto);

   }, []);


  return (
    <div className='page'>
      
      <div className='mask'>
                 
                 <img src={"/images/"+proyecto.id+".png"}></img>
           </div>
      
    <h1 className='heading'>Proyecto: {params.id}</h1> 
    <p>{proyecto.tecnologias}</p>
    <p>{proyecto.descripcion}</p>
    <a href={"https://"+proyecto.url} target="_blank">Ir al proyecto</a>

   

   


     
     
     
     
     </div>
  )
}
import React from 'react'
import { trabajos } from '../data/Trabajos'
import {Link} from 'react-router-dom'

export const ListadoTrabajo = ({limite}) => {
  return (

    

   
     <section className='works'>

     {
        trabajos. slice(0,limite) .map(trabajos=>(  
          
          
          <article key={trabajos.id} className='work-item'>
            <div className='mask'>
                 
                  <img src={"/images/"+trabajos.id+".png"}></img>
            </div>
            <span>{trabajos.categorias}</span>
            <h2><Link to={"/proyecto/"+trabajos.id}>{trabajos.nombre}</Link></h2>
            <h3>{trabajos.tecnologias}</h3>
          </article>
        ))
      }

     </section>

      
      
      
  )
}
import React from 'react'
import {Link} from 'react-router-dom'
import { ListadoTrabajo } from './ListadoTrabajo'

export const Inicio = () => {
  return (
    <div className='home'>
      
     <h1><strong>Inicio</strong></h1> 

     <h2 className='title'>Contratame como tu programa de proyecto <Link to="/contacto"> aqui</Link></h2>
      
      <section className='last-works'>
         <h2 className='heading'>alguno de mis proyectos</h2>
         <p>estos son algunos</p>

         <ListadoTrabajo limite="3"/>

      </section>
      
      </div>
  )
}

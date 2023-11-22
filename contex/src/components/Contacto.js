import React, { useContext } from 'react'
import { PruebaContext } from '../context/PruebasContext'

export const Contacto = () => {
  
  const datoDesdeElContexto= useContext(PruebaContext);
  
  return (
    <div>
      <h1>Pagina de contacto</h1>
      <p>Contenido de la pagina de contacto</p>
      Valor contenida: <pre>{JSON.stringify(datoDesdeElContexto.usuario)}</pre>
     {/* <p>Valor contenida: <strong>{datoDesdeElContexto}</strong></p>*/}
    </div>
  )
}

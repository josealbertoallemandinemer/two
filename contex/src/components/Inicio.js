import React, { useContext } from 'react'
import { PruebaContext } from '../context/PruebasContext'

export const Inicio = () => {
 
 const compartida= useContext(PruebaContext)
 /*desestructuracion=> const{usuario}=useContext(PruebaContext) y luego nombre:{usuario.nombre}*/
 /*desestructuracion=> const{usuario, setUsuario}=useContext(PruebaContext) y luego nombre:{usuario.nombre} web:{usuario.web}*/
 console.log(compartida);

  return (
    <div>
      <h1>Pagina de inicio</h1>
      <p>Contenido de la pagina de inicio</p>
     {/* <p>Valor compartida: <strong>{compartida}</strong></p>*/}
     <p>Nombre: {compartida.usuario.nombre}</p>
    </div>
  )
}

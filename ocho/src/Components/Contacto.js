import React from 'react'

export const Contacto = () => {
  return (

    
   <div className='page'>
      
      
      
    <h1 className='heading'>Contacto</h1> 

    <form className='contact' action='mailto:joseallemandi@gmail.com'>

    <input type='text' placeholder='nombre' className='bloque'></input>
    <input type='text' placeholder='apellido' className='bloque'></input>
    <input type='text' placeholder='mail' className='bloque'></input>
    <textarea placeholder='Motivo de contacto'></textarea>
    <input type='submit' value="Enviar"></input>


    </form>


     
     
     
     
     </div>
  )
}

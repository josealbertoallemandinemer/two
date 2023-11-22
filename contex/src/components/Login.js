import React, { useContext } from 'react'
import { PruebaContext } from '../context/PruebasContext';

export const Login = () => {
 

const {usuario, setUsuario}=useContext(PruebaContext);


 const guardarDatos= e=>{

  e.preventDefault();

  alert(e.target.username.value);

  let usuario_identificado={

    username:e.target.username.value,
    nombre:e.target.nombre.value,
    web:e.target.web.value
  
 

  };

  setUsuario(usuario_identificado);

  console.log(usuario);

 }
 
 
  return (
    <div>
      <h1>Pagina de login</h1>
      <p>Contenido de la pagina de login</p>

      <form className='login' onSubmit={guardarDatos}>
        <input type='text' name='username' placeholder='username'/>
        <input type='text' name='nombre' placeholder='nombre'/>
        <input type='text' name='web' placeholder='web'/>

        <input type='submit' name='submit' value="enviar"/>
      </form>


    </div>
  )
}

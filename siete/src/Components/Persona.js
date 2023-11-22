import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export const Persona = () => {
 
 
    const {nombre, apellido}= useParams();
 
 
    /*const parametros= useParams();
 console.log(parametros);
 {parametros.nombre}
 */

 /*let {nombre="jose", apellido="allemandi"}= useParams();*/

 /*if (!nombre) {
    nombre="jose";
 }

 if (!apellido) {
    apellido="allemandi";
 }*/
   const navegar= useNavigate();

   const enviar=(e)=>{

         e.preventDefault();

         let nombre= e.target.nombre.value;
         let apellido= e.target.apellido.value;
   

         if (nombre.length <=0 && apellido.length <= 0) {
            navegar("/inicio");
         } else if(nombre==="contactos"){
                 navegar("/contactos")

         }else{

            navegar(`/persona/${nombre}/${apellido}`);
         }
        

         

        }


    return (
    <div>
        { ! nombre && <h1>No hay nombre que mostrar</h1>}
        {nombre && <h1>Persona: {nombre} {apellido} </h1>}
        
        <p>Esta es la pagina de Persona</p>


        <form onSubmit={enviar}>
           
           <input type='text' name='nombre'></input>
           <input type='text' name='apellido'></input>
           <input type='submit' name='enviar' value="enviar"></input>

        </form>


        </div>
  )
}

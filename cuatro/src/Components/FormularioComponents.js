import React, {useState} from 'react'

export const FormularioComponents = () => {
 
 const[usuario1,setUsuario]=useState({});
 const conseguirDatosFormulario=e=>{

    e.preventDefault();

        let datos= e.target;
        let usuario={
             nombre:datos.nombre.value,
             apellido: datos.apellido.value,
             genero:datos.genero.value,
             bio:datos.bio.value,
             enviar: datos.enviar.value

        }
        console.log(usuario);

        setUsuario(usuario);
 }

 const cambiarDatos= e=>{
    let name_del_input=e.target.name;
    let usuario_para_modificar= usuario1;

    

   //usuario_para_modificar[name_del_input]=e.target.value;

   setUsuario(estado_previo =>({
        ...estado_previo,
        [name_del_input]: e.target.value
    })
   );

   console.log(usuario1);
}
 
    return (
    <div>
        
       <h1>Formulario</h1>

       {usuario1.enviar &&(

       <div className='info_usuario label'>
        {usuario1.nombre} {usuario1.apellido} es un@ {usuario1.genero} y su bio es <p>{usuario1.bio}</p>
       </div> )
}
        
        <form onSubmit={conseguirDatosFormulario}>

         <input type='text' placeholder='nombre' name='nombre' onChange={cambiarDatos}></input>
         <input type='text' placeholder='apellidos' name='apellido' onChange={cambiarDatos}></input>
         <select name='genero' onChange={cambiarDatos}>
               <option value="hombre">hombre</option>
               <option value="mujer">mujer</option>

         </select>
         <textarea placeholder='biografia' name='bio' onChange={cambiarDatos}></textarea>
        <input type='submit' value="Enviar" name='enviar'></input>
        
        </form>


        </div>
  )
}

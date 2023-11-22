import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';

export const Crear = ({setListadoState}) => {


   const tituloComponente = "agregar peli";

   const [peliState,setPeliState]= useState({
           
         titulo:'',
         descripcion:''

   });

   const {titulo,descripcion}=peliState;
   
   const conseguirDatosForm= e=>{

    e.preventDefault();

    let target= e.target;
    
    let titulo= target.titulo.value;
    let descripcion= target.descripcion.value; 


    


    alert( titulo+"-"+descripcion);

    let peli={
        id: new Date().getTime(),
        titulo,
        descripcion
    };
   

      setPeliState(peli);


     setListadoState(elementos=> {
      return[...elementos,peli];
     });

      GuardarEnStorage("peli",peli);


      console.log(peliState);



    }

   

  return (
    <div className="add">
    <h3 className="title">{tituloComponente}</h3>

<strong>
   {(titulo && descripcion) && "has creado la peli: "+titulo}

   </strong>


    <form onSubmit={conseguirDatosForm}>

        <input type="text" 
               id="titulo" 
               name='titulo'
               placeholder="Titulo" 
               
        />
        <textarea id="description" 
                  name='descripcion'
                  placeholder="Descripción">

        </textarea>


        <input type="submit" 
               id="save" 
               value="Guardar" 
               
        />
    
    </form>
</div>
  )
}

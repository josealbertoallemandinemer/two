import React, { useEffect, useState } from 'react'
import { Editar } from './Editar';

export const Listado = ({listadoState, setListadoState}) => {














 // const [listadoState, setListadoState]= useState([]);
const[editar,setEditar]= useState(0);
  
  useEffect(() => {

    console.log("componentes del listado de peliculas cargado!");
    conseguirPeliculas();
    
  }, [] );

  const conseguirPeliculas= () => {

      let peliculas= JSON.parse(localStorage.getItem("peli"));

      
      setListadoState(peliculas);

      return peliculas;
  }
  
const borrarPeli=(id)=>{
  alert(id);

  let pelis_almacenadas=conseguirPeliculas();

  let nuevo_array_pelis= pelis_almacenadas.filter(peli=> peli.id !==parseInt(id));



  console.log(pelis_almacenadas,nuevo_array_pelis);

 setListadoState(nuevo_array_pelis);

 localStorage.setItem('peli', JSON.stringify(nuevo_array_pelis));

}

  return (
    <>

    {listadoState != null ? listadoState.map(peli=>{

     return(
        
      <article 
     key={peli.id} className="peli-item">
                <h3 className="title">{peli.titulo}</h3>
                <p className="description">{peli.descripcion}</p>

                <button className="edit" onClick={()=>{
                  setEditar(peli.id)
                }}>Editar</button>
                <button className="delete" onClick={()=>borrarPeli(peli.id)}>Borrar</button>


{editar=== peli.id && (
  <Editar peli={peli} 
  conseguirPeliculas={conseguirPeliculas}
  setEditar={setEditar}
  setListadoState={setListadoState}/>
)}

            </article>

     );


    }): <h2>no hay pelis</h2>
  
  }
    
    </>
  )











}

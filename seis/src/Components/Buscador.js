import React, { useState } from 'react'

export const Buscador = ({listadoState,setListadoState}) => {
  
  const [busqueda,setBusqueda]=useState('');
  const[noEncontrado,setNoEncontrado]=useState(false);
  
  const buscarPeli=(e)=>{

     

     setBusqueda(e.target.value);

     

  let pelis_encontradas = listadoState.filter(peli => {
    
    return peli.titulo.toLowerCase().includes(busqueda.toLocaleLowerCase());
  
  
  });

  if (busqueda.length <=1 || pelis_encontradas <=0 ) {
    pelis_encontradas=JSON.parse(localStorage.getItem("peli"));
    setNoEncontrado(true);
  }else{

    setNoEncontrado(false);
  }


     setListadoState(pelis_encontradas);






  }
  
  
  
  
  return (
    
    <div className="search">
    <h3 className="title">Buscador: {busqueda}</h3>
    {noEncontrado==true && (
       
       <span className='no-encontrado'>no se ha encontrado coincidencia</span>

    )}
    
    <form>
        <input type="text" id="search_field" name='busqueda' autoComplete='off' onChange={buscarPeli}/>
        <button id="search">Buscar</button>
    </form>
</div>



  )
}

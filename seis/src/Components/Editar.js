import React from 'react'

export const Editar = ({peli,conseguirPeliculas,setEditar,setListadoState}) => {
  
  const titulo_componente="editar peli";

  const guardarEdicion= (e,id)=>{
    e.preventDefault();

    let target=e.target;

    const pelis_almacenadas=conseguirPeliculas();
    console.log(pelis_almacenadas);


    const indice= pelis_almacenadas.findIndex(peli=>peli.id===id);

    console.log(indice);


    let peli_actualizada= {

         id,
         titulo:target.titulo.value,
         descripcion:target.descripcion.value,

    }

    console.log(indice,peli);

     pelis_almacenadas[indice]=peli_actualizada;

     console.log(pelis_almacenadas);
  
  
     localStorage.setItem("peli", JSON.stringify(pelis_almacenadas));

      setListadoState(pelis_almacenadas);
      setEditar(0);
    }



    return (
    <div className='edit_form'>
        
        
       <h3 className='title'>{titulo_componente}: {peli.titulo}</h3> 
        
        <form onSubmit={e=>guardarEdicion(e,peli.id)}>
<input type='text' name='titulo' className='titulo_editado' defaultValue={peli.titulo}/>


<textarea name='descripcion' defaultValue={peli.descripcion} className='descripcion_editada'/>

<input type='submit' className='editar' value="actualizar"/>









        </form>
        
        
        
        </div>
  )
}

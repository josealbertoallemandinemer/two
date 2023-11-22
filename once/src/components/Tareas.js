import React,{useState, useMemo} from 'react'

export const Tareas = () => {
  
  const [tareas, setTareas]= useState ([]);
  const[contador, setContador]= useState(300);

  const guardarTareas=e=>{

    e.preventDefault();

    let tareas_actualizadas=[...tareas, e.target.descripcion.value];

    setTareas(tareas_actualizadas);

    console.log(tareas);
  }

  const borrarTarea = id =>{

    let nuevas_tareas = tareas.filter((tarea,indice)=> indice !== id );
    console.log(nuevas_tareas);

    setTareas(nuevas_tareas);

  }

  const sumarAlContador= e=>{

      setContador(contador+1);
  }

  const contadoresPasados=(acumulacion)=>{

    for (let i = 0; i <= acumulacion; i++) {
        console.log("Ejecutando acumulacion de contadores del pasado...");
        
    }

        return `contador manual de tareas: ${acumulacion}`
  }

  const memoContador= useMemo(()=>  contadoresPasados(contador), [contador]);
  
  
    return (

    <div className='tareas-container'>

        <h1>Tareas</h1>

        <form onSubmit={guardarTareas}>

            <input type='text' name='descripcion' placeholder='descrie la tarea'/>
            <input type='submit' value="guardar" />

        </form>


        <h3>{memoContador}</h3>

        <button onClick={sumarAlContador}>Sumar</button>

        <h3>Lista de tareas</h3>

        <ul>
       {
             tareas.map((tarea, indice)=>{

                  return  (<li key={indice}>
                    {tarea}
                    &nbsp;

                    <button onClick={()=>borrarTarea(indice)}>X</button>
                    
                    
                    </li>)
             })


       }


        </ul>


    </div>
  )
}

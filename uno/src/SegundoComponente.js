import React from 'react'

export const SegundoComponente = () => {


   const libros=["harry","potatoe","juego"];

  return (
    <div className='SegundoComponente'>

<hr/>
          <h1>Listado de libros</h1>
    <ul>
            <li>{libros[0]}</li>
            <li>{libros[1]}</li>
            <li>{libros[2]}</li>



    </ul>

    
 { libros.length>=1 ? (
    <ul>
            {

                libros.map((libro, indice)=>{
                    return <li key={indice}>{libro}</li>
                    
                })
            }


    </ul>
 )
    :(
    <p>No hay libros</p>
    )
 }



    </div>




  )

  


}

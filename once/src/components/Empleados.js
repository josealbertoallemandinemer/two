import React, {useEffect, useState} from 'react'

export const Empleados = React.memo ( ({pagina, mensaje} ) => {
  


     const [empleados, setEmpleados]= useState([]);

    useEffect(()=>{
        conseguirEmpleados(pagina);
        mensaje();
      }, [pagina]);

     /* mensaje();*/
  

    const conseguirEmpleados= async(p)=>{
    const url="https://reqres.in/api/users?page="+ p;
    const peticion = await fetch(url);
    const {data:empleados} = await peticion.json();

/*<li>
                      {empleados.length >=1 && empleados[0].email}
                </li>*/

    setEmpleados(empleados);


    console.log("se ejecuto ajax");
  }

   useEffect(()=>{
    console.log("se renderiza otra vez?");

  },[empleados]);


 
  
    return (
    <div>
        
       <ul className='empleados'>
                
                    {empleados.length >=1 && empleados.map(empleado=>{
                        return <li key={empleado.id}>{empleado.first_name+""+ empleado.last_name}</li>
                    })}


                

       </ul>
        
        
        </div>
  )
}
);

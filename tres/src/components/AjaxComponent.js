import React,{useEffect,useState} from 'react'



export const AjaxComponent = () => {




    const[usuarios,setUsuarios]=useState([]);
    const[cargando,setCargando]=useState(true);
    const[errores,setErrores]=useState("");

    const getUsuariosEstaticos=()=>{
    
        setUsuarios([
    
            {
                "id": 1,
                "email": "loca@jiji.com",
                "first_name": "loca",
                "last_name": "cardona",
                "avatar": "https://reqres.in/img/faces/7-image.jpg"
            },
            {
                "id": 2,
                "email": "osita@reqres.in",
                "first_name": "osita",
                "last_name": "Ferguson",
                "avatar": "https://reqres.in/img/faces/8-image.jpg"
            },
            {
                "id": 3,
                "email": "chicleazul@reqres.in",
                "first_name": "angela",
                "last_name": "Forpresident",
                "avatar": "https://reqres.in/img/faces/9-image.jpg"
            }
    
    
        ]);
    }

    const getUsuariosAjaxPms=()=>{

        fetch("https://reqres.in/api/users?page=1")
        .then(respuesta=>respuesta.json())
        .then(resultado_final=>{
             setUsuarios(resultado_final.data);
             console.log(usuarios);
        },
        error=>{
            console.log(error);
        }
        
        
        )
    }

    const getUsuariosAjaxAW =() =>{
        
         setTimeout(async() => {

       try{     
            const peticion= await fetch("https://reqres.inerror/api/users?page=1");
        const {data}= await peticion.json();

        console.log(data);

        setUsuarios(data);
        setCargando(false);

         } catch (error){
            console.log(error.message);
            setErrores(error.message);
         }



         }, 2000);


        
    }

   useEffect(()=>{

   // getUsuariosEstaticos();
  // getUsuariosAjaxPms();
  getUsuariosAjaxAW();

        },[]);



if (errores !=="") {

    return(

        <div className='errores'>

             {errores}
        </div>
    )
    
}else if (cargando==true) {
    return(

        <div className='cargando'>

                     cargando datos...
        </div>

 )
}else if(cargando==false && errores===""){

    return (
        <div>
            
            <h2>
            AjaxComponent
            </h2>
    
            <ol className='usuarios'>
                {
                    usuarios.map(usuario=>{
                        console.log(usuario);
                        return <li key={usuario.id}>
                            <img src={usuario.avatar} width="80"/>
                            &nbsp;
                            {usuario.first_name}{usuario.last_name}</li>
                    })
                }
            </ol>
    
    
    
            
            </div>
      )


}


  

  
}

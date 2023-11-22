import React from "react";
const MiComponente=()=>{

    let nombre= "jose";
    let web= "josejose.es";

    let usuario={

         nombre:"pepe",
         edad:"dieciocho",
         pecho:"peludo"


    };

    console.log(usuario);

   return (
   <div className="mi-componente">
   <hr/>
   
   <h2>ESTE ES MI COMPONENTE</h2>
   <h3>datos usuario</h3>

     <ul>
               <li>nombre= {nombre}</li>
               <li>web= {web}</li>
               <li>nombre= {usuario.nombre}</li>
               <li>pecho= {usuario.pecho}</li>

     </ul>


   <p>Componente creado</p>

   <ul>
         <li>uno</li>
   
         <li>dos</li>


         <li>tres</li>
   
   </ul>

</div>

   );

   };



export default MiComponente;
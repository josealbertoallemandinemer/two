import React from 'react'
import PropTypes from "prop-types";

export const TercerComponente = ({nombre="victor",apellidos,ficha}) => {	
    {/* 
    
    export const TercerComponente = (props) => { 
    <li>{props.nombre}</li>
    <li>{props.apellidos}</li>
    console.log(props);
    */
}

   

  return (

    <div>
        <h1>Comunicacion</h1>


        <ul>
                <li>{nombre}</li>
                <li>{apellidos}</li>
                <li>{ficha.estado}</li>
                <li>{ficha.alergias}</li>
                


        </ul>




    </div>
    
  )
}

TercerComponente.propTypes={

     nombre: PropTypes.string,                             
     apellidos: PropTypes.string,
     ficha: PropTypes.object,


}

{/* 
    IsRequired
TercerComponente.defaultProps={

    nombre: "carlos",
    apellidos: "pipo"
    


}*/}

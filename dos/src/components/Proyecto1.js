import React, {useState} from 'react'
import PropTypes from "prop-types";


export const Proyecto1 = ({year}) => {


    const [yearNow, setYearNow]=useState(year);
    
    const siguiente=e=>{

        let operacion=yearNow+1;
        setYearNow(operacion);
    }

    const anterior=e=>{
        setYearNow(yearNow-1);
    }

    const cambiarYear= e => {
        let dato=parseInt(e.target.value);


       if (Number.isInteger(dato)) {
        
           setYearNow(dato);
       }else{
        setYearNow(year);
       }


        
    }



  return (



    <div>
        
       <h1> Proyecto1 </h1>

       <strong className='label'>

                   {yearNow}
       </strong>

       <p>
                   <button onClick={siguiente}>siguiente</button>
                   &nbsp;
                   <button onClick={anterior}>anterior</button>

       </p>

      <p>
        
        <h2>cambiar:</h2>

      <input onChange={cambiarYear} type='text' placeholder='cambiar'></input>

      </p>
      
        
        
        </div>
  )
}

Proyecto1.propTypes={
    year: PropTypes.number.isRequired
}

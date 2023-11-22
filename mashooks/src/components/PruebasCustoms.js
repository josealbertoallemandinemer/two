
import { useMayus } from '../hooks/UseMayus'

export const PruebasCustoms = () => {
  
  
  
  
  const {estado, mayusculas, minusculas, concatenar}= useMayus("jose albert allemer");

  /*console.log(mayusculas());
  console.log(minusculas());
  console.log(concatenar(" hola"));*/
  
    return (
    <div>
        
        <h1>PruebasCustoms</h1>
       
       {/* {mayusculas()}
        <hr/>
        {minusculas()}
        <hr/>
        {concatenar(" hola")}
    <hr/>*/}

    <h2>{estado}</h2>
    <hr/>
        <button onClick={ mayusculas }>Poner en mayusculas</button>
        <button onClick={ minusculas }>Poner en minusculas</button>
        <button onClick={ e=> concatenar(" de cardona") }>+</button>
        
        
        </div>
  )
}

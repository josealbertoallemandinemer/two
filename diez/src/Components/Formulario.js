import React, { useRef } from 'react'

export const Formulario = () => {
  
  const nombreValue= useRef();
  const apellidoValue= useRef();
  const emailValue= useRef();
  const miCaja= useRef();

  const mostrar= e => {
    e.preventDefault();

    console.log(nombreValue.current.value);
    console.log(apellidoValue.current.value);
    console.log(emailValue.current.value);



    /*console.log(miCaja);
    miCaja.current.classList.add("fondoVerde");*/
    let {current: caja} = miCaja;
    caja.classList.add("fondoVerde");
    caja.innerHTML="Formulario enviado!";
  }
  
  return (
    <div>
              <h1>Formulario</h1>

              <div ref={miCaja} className='miCaja'>

                <h2>Pruebas con useRef</h2>

              </div>

              <form onSubmit={mostrar}>

                <input type='text' placeholder='nombre' ref={nombreValue}/><br/>
                <input type='text' placeholder='apellido' ref={apellidoValue}/><br/>
                <input type='email' placeholder='correo electronico' ref={emailValue}/><br/>

                <input type="submit" value="enviar"/>

              </form>

              <button onClick= {()=> nombreValue.current.select()}>Empieza ahora!</button>



    </div>
  )
}

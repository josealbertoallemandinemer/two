import React from 'react'

export const EventosComponentes = () => {

  const Click=(e, nombre)=>{
    alert("diste manteca "+nombre);
  }

  function Clickx2(e, nombre){
    alert("diste manteca x2 "+nombre);
  }

  function Clickx22(e){
    alert("diste manteca x2 otra vez");
  }

  const hasentrado=(e,accion)=>{
    alert("has "+accion+" a la caja");
  }

  const estasdentro = e =>{
    console.log("estas dentro del imput, mete tu nombre");
  }
  const estasfuera = e =>{
    console.log("estas fuera del imput, chao");
  }

  return (

    
    <div>
             
             <hr/>
             <h1>Eventos</h1>
              <p><button onClick={e=>Click(e,"angela")}>dame mantenca</button></p>
              <p><button onDoubleClick={e=>Clickx2(e,"angela")}>dame mantenca x2</button></p>
              <p><button onDoubleClick={Clickx22}>dame mantenca x2 otra vez</button></p>

              <div id="caja" onMouseEnter={e=>hasentrado(e,"entrado")} onMouseLeave={e=>hasentrado(e,"salido")}>
                    Pasa por encima


              </div>

      <p>
               <input type="text" onFocus={estasdentro} onBlur={estasfuera} placeholder="int tu nombre..."/>
      </p>




<hr/>
    </div>
  )
}

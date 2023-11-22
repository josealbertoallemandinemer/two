
import { useEffect, useState } from 'react';
import './App.css';
import { PruebaContext } from './context/PruebasContext';
import { AppRouter } from './routing/AppRouter';

function App() {



const [usuario, setUsuario]= useState([]);


useEffect(()=>{

  console.log("una vez al cargar");

  let usuario_local = JSON.parse( localStorage.getItem("usuario"));


  setUsuario(usuario_local);
}, []);

useEffect(()=>{

    console.log("cambio usuario");

  localStorage.setItem("usuario", JSON.stringify(usuario));

}, [usuario]);


  
 /*const curso={
  id:1,
  titulo:"master",
  contenido: "muchas horas"


  value={curso}



  datoDesdeElContexto.contenido

  o

  valor compartido:<pre>{JSON.stringify(datoDesdeElContexto)}</pre>


  value="Jose"
 }*/
 
 
  return (
    <div className="App">
      <header className="App-header">
        <h1>useContex</h1>

     <PruebaContext.Provider value={{
          
          usuario,
          setUsuario
     }}>   

     <AppRouter/>

     </PruebaContext.Provider>
        
      </header>
    </div>
  );
}

export default App;

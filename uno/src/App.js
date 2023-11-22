import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import { SegundoComponente } from './SegundoComponente';
import { TercerComponente } from './TercerComponente';
import { EventosComponentes } from './EventosComponentes';

function App() {


    const FichaMedica={
     
      altura:"187cm",
      grupo:"h+",
      estado:"bueno",
      alergias:"ninguna"


    }




  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          BIENVENIDO
        </p>
       <MiComponente/>
       
       <SegundoComponente/>

       <TercerComponente 
       
       apellidos="robles" 
       ficha={FichaMedica}
       />

       <EventosComponentes/>
       
      </header>
    </div>
  );
}

export default App;

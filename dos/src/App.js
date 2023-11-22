import logo from './logo.svg';
import './App.css';
import { MiPrimerEstado } from './components/MiPrimerEstado';
import { Proyecto1 } from './components/Proyecto1';


function App() {

 const fecha= new Date();
 const yearActual=fecha.getFullYear();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        <h1>El estado en React- hook useState</h1>


           <MiPrimerEstado/>
           <Proyecto1 year={yearActual}/>
           


      </header>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { MiComponente } from './components/MiComponente';
import { PruebasCustoms } from './components/PruebasCustoms';
import { MiFormulario } from './components/MiFormulario';
import { MiUsuario } from './components/MiUsuario';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
       {/*<MiComponente/>*/}
       {/*<PruebasCustoms/>*/}
      {/* <MiFormulario/>*/}
      <MiUsuario/>
      </header>
    </div>
  );
}

export default App;

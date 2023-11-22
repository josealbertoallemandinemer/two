import React from 'react';
import {Routes, Route, NavLink, BrowserRouter, Navigate} from 'react-router-dom';
import { Inicio } from '../Components/Inicio';
import { Articulos } from '../Components/Articulos';
import { Error } from '../Components/Error';
import { Contactos } from '../Components/Contactos';
import { Persona } from '../Components/Persona';
import { PanelControl } from '../Components/PanelControl';

import { InicioPanel } from '../Components/Panel/Inicio';
import { Gestion } from '../Components/Panel/Gestion';
import { Crear } from '../Components/Panel/Crear';
import { Acerca } from '../Components/Panel/Acerca';

export const RouterPrincipal = () => {
  return (
    <BrowserRouter>

    <h1>Cabecera</h1>
    <hr/>

    <nav>
      
     
     <ul>
            <li>
                <NavLink className={({isActive})=>isActive ? "activado" : "" } to='/inicio'>Inicio</NavLink>
            </li>
            <li>
                <NavLink className={({isActive})=>isActive ? "activado" : "" } to='/articulos'>Articulos</NavLink>
            </li>
            <li>
                <NavLink className={({isActive})=>isActive ? "activado" : "" } to='/contactos'>Contactos</NavLink>
            </li>

            <li>
                <NavLink className={({isActive})=>isActive ? "activado" : "" } to='/panel'>Panel de control</NavLink>
            </li>
            


     </ul>


    </nav>

    <hr/>


<section className='contenido-principal'>
    <Routes>

      <Route path='/' element={<Inicio/>}/>
      <Route path='/inicio' element={<Inicio/>}/>
      <Route path='/articulos' element={<Articulos/>}/>
      <Route path='/contactos' element={<Contactos/>}/>
      <Route path='/persona/:nombre/:apellido' element={<Persona/>}/> 
      <Route path='/persona/:nombre' element={<Persona/>}/>  
      <Route path='/persona' element={<Persona/>}/>  
      <Route path='/redirigir' element={<Navigate to="/persona/victor/robles"/>}/> 

      <Route path='/panel/*' element={<PanelControl/>}> 
      <Route  index element={<InicioPanel/>}/> 
      <Route  path="crear-articulos" element={<Crear/>}/> 
      <Route  path="gestion-usuarios" element={<Gestion/>}/> 
      <Route  path="acerca-de" element={<Acerca/>}/>  
      </Route>  

      <Route path='*' element={<Error/>}/>  

    </Routes>

    </section>

    <hr/>

    <footer>

        Pie de pagina
    </footer>
    
    
    </BrowserRouter>
  )
}

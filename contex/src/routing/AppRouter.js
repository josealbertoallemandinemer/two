import React, { useContext } from 'react'
import {Routes, Route, NavLink, BrowserRouter} from 'react-router-dom';
import { Inicio } from '../components/Inicio';
import { Articulos } from '../components/Articulos';
import { Acerca } from '../components/Acerca';
import { Contacto } from '../components/Contacto';
import { Login } from '../components/Login';
import { PruebaContext } from '../context/PruebasContext';

export const AppRouter = () => {
  
  
  const {usuario, setUsuario}=useContext(PruebaContext);
  
  
  
    return (
    
    <BrowserRouter>

    <header className='header'>
    <nav>
        <div className='logo'>
            <h2>Aprendiendo React Context</h2>
        </div>
    <ul>
    
    <li className={({isActive})=>isActive ? "activado" : "" }>
        <NavLink to="/">Inicio</NavLink>
    </li>

    <li className={({isActive})=>isActive ? "activado" : "" }>
        <NavLink to="/articulos">Articulos</NavLink>
    </li>

    <li className={({isActive})=>isActive ? "activado" : "" }>
        <NavLink to="/acerca">Acerca de</NavLink>
    </li>

    <li className={({isActive})=>isActive ? "activado" : "" }>
        <NavLink to="/contacto">Contacto</NavLink>
    </li>

    <li className={({isActive})=>isActive ? "activado" : "" }>
        {usuario.hasOwnProperty("username") && usuario.username !==null ? (
            <>
           <li> <NavLink to="/">{usuario.username}</NavLink></li>

           <li> 
            
             <a href='#' onClick={e=>{

              e.preventDefault();
              setUsuario({});

           }}> Cerrar sesion </a> 
           
           </li>
           </>
        ):(

           <li> <NavLink to="/login">Login</NavLink></li>
        )}
        
    </li>

    

    </ul>

    </nav>

    </header>
    

   <section className='content'>

    <Routes>

        <Route path='/' element={<Inicio/>} />
        <Route path='/inicio' element={<Inicio/>} />
        <Route path='/articulos' element={<Articulos/>} />
        <Route path='/acerca' element={<Acerca/>} />
        <Route path='/contacto' element={<Contacto/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='*' element={(
            <div>
                <h1>Error 404</h1>
            </div>
   ) } />


    </Routes>

    </section>
    
    
    
    
    
    </BrowserRouter>


  )
}

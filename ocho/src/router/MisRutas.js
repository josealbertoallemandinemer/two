import React from 'react'
import {Routes, Route, BrowserRouter, NavLink, Navigate} from "react-router-dom";
import { Inicio } from '../Components/Inicio';
import { Portafolios } from '../Components/Portafolios';
import { Servicios } from '../Components/Servicios';
import { Curriculum } from '../Components/Curriculum';
import { Contacto } from '../Components/Contacto';
import { HeaderNav } from '../Components/layaout/HeaderNav';
import { Footer } from '../Components/layaout/Footer';
import { Proyecto } from '../Components/Proyecto';

export const MisRutas = () => {
  return (
    


    <BrowserRouter>


     <HeaderNav/>


   
    <section className='content'>
    
    
    <Routes>

<Route path="/" element={<Navigate to="/inicio"/>} />
<Route path="/inicio" element={<Inicio/>} />
<Route path="/portafolio" element={<Portafolios/>} />
<Route path="/servicios" element={<Servicios/>} />
<Route path="/curriculum" element={<Curriculum/>} />
<Route path="/contacto" element={<Contacto/>} />
<Route path="/proyecto/:id" element={<Proyecto/>} />
<Route path="*" element={

<div className='page'>
<h1 className='heading'>ERROR 404</h1>
</div>

} />


</Routes>


    </section>
      


      <Footer/>



    </BrowserRouter>



  )
}

import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Login from './login';
import Vacina from './vacina';
import Contact from './contact';
import Register from './register';
import License from './license';
import Finally from './finally';

const Main = () => (
    <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route path="/Vacina" element={<Vacina/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/license" element={<License/>} />
        <Route path="/finally" element={<Finally/>} />
    </Routes> 
)

export default Main;
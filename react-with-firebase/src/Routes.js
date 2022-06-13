import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signin from './pages/Signin/Signin.js';
import Signup from './pages/Signup/Signup';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/signin' element={<Signin />} />
                <Route path='/signup' element={<Signup />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
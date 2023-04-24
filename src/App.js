import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Frontend from './components/Frontend';
import English from './components/English';
import Home from './components/Home';
import Germany from './components/Germany';
import French from './components/French';
import Icdl from './components/Icdl';
import Graphic from './components/Graphic';


const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
      <Sidebar/>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/english' element = {<English/>} />
        <Route path='/germany' element = {<Germany/>} />
        <Route path='/french' element = {<French/>} />
        <Route path='/frontend' element = {<Frontend/>} />
        <Route path='/icdl' element = {<Icdl/>} />
        <Route path='/graphic' element = {<Graphic/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
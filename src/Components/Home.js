import React from 'react'
import Navbar from './Navbar'
import Board from './Board'
import DialogBox from './Dialogbox'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const Home = () => {
  return (
   <Router>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Board/>}/>
        <Route path="/dialogbox/:content" element={<DialogBox />} />
    </Routes>
   </Router>
  )
}

export default Home

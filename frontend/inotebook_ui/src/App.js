import {   BrowserRouter , Route,  Routes} from 'react-router-dom';
import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import NoteState from './context/NoteState';
import LoadingBar from 'react-top-loading-bar'

const App = () => {

  const [progress,setProgress] = useState(0);

  return (
    <div>
      <NoteState setProgress={setProgress}>
        <BrowserRouter>
          <Navbar/>
          <LoadingBar color='#f11946' progress={progress} />
          <div className="container">
            <Routes>
              <Route exact path="/" setProgress={setProgress} element={<Home/>}></Route>
              <Route exact path="/about" element={<About/>}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </NoteState>
    </div>
  );
}

export default App;

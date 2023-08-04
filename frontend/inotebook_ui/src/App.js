import {   BrowserRouter , Route,  Routes} from 'react-router-dom';
import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import AlertBox from './components/AlertBox';
import NoteState from './context/NoteState';
import LoadingBar from 'react-top-loading-bar'
import Login from './components/Login';
import Register from './components/Register';

const App = () => {

  const [progress,setProgress] = useState(0);
  const [alert,setAlert] =useState(null);

  const showAlert = (message,type) =>{
    console.log('showalert'+ message);
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }

  return (
    <div>
      <NoteState setProgress={setProgress} showAlert={showAlert} >
        <BrowserRouter>
          <Navbar/>
          <LoadingBar color='#f11946' progress={progress} />
          <AlertBox alert={alert}/>
          <div className="container">
            <Routes>
              <Route exact path="/" setProgress={setProgress} element={<Home/>}></Route>
              <Route exact path="/about" element={<About/>}></Route>
              <Route exact path="/login" element={<Login/>}></Route>
              <Route exact path="/register" element={<Register/>}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </NoteState>
    </div>
  );
}

export default App;

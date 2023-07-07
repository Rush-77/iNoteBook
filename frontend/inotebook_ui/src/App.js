import {   BrowserRouter , Route,  Routes} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import NoteState from './context/NoteState';


const App = () => {
  return (
    <div>
      <NoteState>
        <BrowserRouter>
          <Navbar/>
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home/>}></Route>
              <Route exact path="/about" element={<About/>}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </NoteState>
    </div>
  );
}

export default App;

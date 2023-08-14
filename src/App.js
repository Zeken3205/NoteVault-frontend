import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useContext } from 'react';
import About from './components/About';
import Home from './components/Home';
import Alert from './components/Alert';
import NoteState from './Context/Notestate.js';
import Alertstate from './Context/Alertstate';
import Alertcontext from './Context/Alertcontext';

function App() {
  return (
    <NoteState>
      <Alertstate>
        <Content />
      </Alertstate>
    </NoteState>
  );
}

function Content() {
  const alertcontext = useContext(Alertcontext);

  return (
    <BrowserRouter>
      <Navbar />
      <Alert alert={alertcontext.alert} />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

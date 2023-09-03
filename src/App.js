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
// eslint-disable-next-line
import Login from './components/login';
// eslint-disable-next-line
import SignUp from './components/signup';
import ProtectedRoute from './components/ProtectedRoute';
import Authpage from './components/Authpage';
import NavbarView from './components/NavbarView';
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
      <NavbarView>
        <Navbar />
      </NavbarView>

      <Alert alert={alertcontext.alert} />
      <div className="container">
        <Routes>
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
          <Route exact path="/login" element={<Authpage />} />
          {/* <Route exact path="/signup" element={<SignUp />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

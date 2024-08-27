import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Frames from './Components/Frames';
import Demos from './Components/Demos';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<Demos />} />
          <Route path="/frames" element={<Frames />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

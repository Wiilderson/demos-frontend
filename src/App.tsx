import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Frames from './Components/Frames';
import Demos from './Components/Demos';

function App() {
  return (
    <>
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

import './App.css';
import { Routes, Route } from "react-router-dom"
import Landing from './pages/Landing'
import Register from './pages/Register'


function App() {
  return (
    <div className="App">
      <header className="Nav">
        
      </header>
      <div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

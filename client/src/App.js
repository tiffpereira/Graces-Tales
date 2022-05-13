import './styles/App.css';
import { Routes, Route } from "react-router-dom"
import Nav from './components/Nav'
import Landing from './pages/Landing'
import Register from './pages/Register'
import SignIn from './pages/SignIn';
import MyAccount from './pages/MyAccount';
import Books from './pages/Books';
import BookDetails from './pages/BookDetails';


function App() {
  return (
    <div className="App">
      <header className="Nav">
        <Nav />
      </header>
      <div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/:id" element={<BookDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

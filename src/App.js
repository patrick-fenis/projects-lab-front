import './App.css'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';


function App() {
  const URL = 'https://project-lab-backend.herokuapp.com/'
  
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='about' element={<About URL={URL} />} />
        <Route eaxct path='projects' element={<Projects URL={URL} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

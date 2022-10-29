import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home  from './pages/Home';
import Projects from './pages/Project';
import Navigation from './components/Navigation';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

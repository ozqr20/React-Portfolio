import logo from './logo.svg';
import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { Project } from './components/Project';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Navigation></Navigation>
      <Project></Project>
      <Footer></Footer>
    </div>
  );
}

export default App;

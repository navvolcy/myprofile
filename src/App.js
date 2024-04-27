import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Works from './components/Works';
import Contact from './components/Contacts';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <About/>
      <Skills/>
      <Works/>
      <Contact/> 

    </div>
  );
}

export default App;

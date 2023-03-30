import { Routes, Route, NavLink } from 'react-router-dom';
import About from './About';
import './App.css';
import Contact from './Contact';
import Experience from './Experience';
import RouterError from './RouterError';
import Homepage from './Homepage';

function App() {
  return (

    <div className="App">
      <header>
        <NavLink to='/react-router-dom-exercise'>Home</NavLink>
        <NavLink to='/' >Experience</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
      </header>
    
    
      <Routes>
        <Route path = '/' element = {<Experience/>}/>
        <Route path = '/react-router-dom-exercise' element = {<Homepage/>}/>
        <Route path = '/about' element = {<About/>}/>
        <Route path = '/contact' element = {<Contact/>}/>
        <Route path = '*' element = {<RouterError/>}/>
      </Routes>

    </div>

  );
}

export default App;

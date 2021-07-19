
import './app.scss';
import Contact from './components/contact/contact';
import Intro from './components/intro/intro';
import Navbar from './components/navbar/navbar';
import Projects from './components/projects/projects';
import Canido from './components/wutcanido/canido';
import React from 'react'
function App() {
  return (
    <div className="app">
      <Navbar/>
      <div className="sections">
          <Intro/>
          <Canido/>
          <Projects/>
         
      </div>
      <Contact/>
    </div>
  );
}

export default App;

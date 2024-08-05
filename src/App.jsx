import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Navbar from './Components/Navbar/Navbar';
import Intro from './Components/Intro/Intro';
import About from './Components/About/About';
import Skills from './Components/Sklls/Skills';
import Education from './Components/Education/Education';
import Work from './Components/Work/Work';
import Contact from './Components/Contact/Contact';

function App() {

  return (
    <div className='container'>
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Education />
      <Work />
      <Contact />
    </div>
  )


}

export default App;

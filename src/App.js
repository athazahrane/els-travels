// import functionals components
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Information from './components/Information';
import AboutUs from './components/AboutUs';
import Popular from './components/Popular';
import Culture from './components/Culture';
import Contact from './components/Contact';

// css
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Container>
        <Information />
        <AboutUs />
        <Popular />
        <Culture />
        <Contact />
      </Container>
    </div>
  );
}

export default App;

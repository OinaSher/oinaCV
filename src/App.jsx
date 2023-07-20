import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mainpage from "./components/Mainpage";
import "./App.css";
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BiomaskProject from './components/BiomaskProject';
import TeammateProject from './components/TeammateProject';
import DivereporterProject from './components/DivereporterProject';
import QuizerriaProject from './components/QuizerriaProject';
import About from './components/About';


const App = () => {

  return (
    <div className='App'>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/oina_portfolio" element={<Mainpage />} />
          <Route path="/oina_portfolio/about" element={<About />} />
          <Route path="/oina_portfolio/biomaskProject" element={<BiomaskProject />} />
          <Route path="/oina_portfolio/teammateProject" element={<TeammateProject />} />
          <Route path="/oina_portfolio/divereporterProject" element={<DivereporterProject />} />
          <Route path="/oina_portfolio/quizerriaProject" element={<QuizerriaProject />} />
          {/* routes and what component to render */}
        </Routes>
        <Footer/>
      </BrowserRouter>

    </div>

  )
}

export default App

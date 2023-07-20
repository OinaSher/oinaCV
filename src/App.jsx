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
          <Route path="/oinaCV" element={<Mainpage />} />
          <Route path="/oinaCV/about" element={<About />} />
          <Route path="/oinaCV/biomaskProject" element={<BiomaskProject />} />
          <Route path="/oinaCV/teammateProject" element={<TeammateProject />} />
          <Route path="/oinaCV/divereporterProject" element={<DivereporterProject />} />
          <Route path="/oinaCV/quizerriaProject" element={<QuizerriaProject />} />
          {/* routes and what component to render */}
        </Routes>
        <Footer/>
      </BrowserRouter>

    </div>

  )
}

export default App

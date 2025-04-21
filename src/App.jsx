import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ScanProvider } from './context/ScanContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Scan from './pages/Scan';
import Results from './pages/Results';
import About from './pages/About';
import './styles/global.css';

function App() {
  return (
    <ScanProvider>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/scan" element={<Scan />} />
            <Route path="/results" element={<Results />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </ScanProvider>
  );
}

export default App;
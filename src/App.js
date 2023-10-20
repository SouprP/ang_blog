import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Week1 from './pages/Week1';
import Week2 from './pages/Week2';
import Week3 from './pages/Week3';

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/1" element={<Week1 />} />
          <Route path="/2" element={<Week2 />} />
          <Route path="/3" element={<Week3 />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;

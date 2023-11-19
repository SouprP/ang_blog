import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
//import {Week1, Week2, Week3, Week4, Week5, Week6, Week7} from './pages';
import Week1 from './pages/Week1';
import Week2 from './pages/Week2';
import Week3 from './pages/Week3';
import Week4 from './pages/Week4';
import Week5 from './pages/Week5';
import Week6 from './pages/Week6';
import Week7 from './pages/Week7';

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/1" element={<Week1 />} />
          <Route path="/2" element={<Week2 />} />
          <Route path="/3" element={<Week3 />} />
          <Route path="/4" element={<Week4 />} />
          <Route path="/5" element={<Week5 />} />
          <Route path="/6" element={<Week6 />} />
          <Route path="/7" element={<Week7 />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;

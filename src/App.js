import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Week1 from './pages/Week1';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/1" element={<Week1 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

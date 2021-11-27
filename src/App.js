import Main from './pages/Main';
import Visualize from './pages/Visualize';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/data" element={<Visualize />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
 
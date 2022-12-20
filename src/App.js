import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Carosel from './Components/Carosel/Carosel';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/"element={<Carosel/>}/>

      
    </Routes>
    </BrowserRouter>
  );
}

export default App;

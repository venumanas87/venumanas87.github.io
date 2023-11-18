
import './App.css';
import Main  from './components/pages/Main';
import Nav  from './components/Nav';
import { Route, Routes } from 'react-router-dom';
import Stats from './components/pages/Stats';

function App() {
  return  (
    <>
    <Nav/>
    <Routes>
      <Route element={<Main/>} path="/" />
      <Route element={<Stats/>} path='/stats' />
      <Route element={<Main/>} path='/me' />
    </Routes>
    </>

);
}

export default App;

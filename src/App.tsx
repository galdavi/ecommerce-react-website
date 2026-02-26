import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Checkout from './pages/Checkout';
import Navbar from './components/Navbar';
import './App.css'

function App() {

  return (
    <div className="flex flex-col min-h-screen bg-white">

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='*' element={<h1 className='text-center text-2xl mt-10'>404 Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App

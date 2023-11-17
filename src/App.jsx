
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Pagenotfound from './pages/Pagenotfound';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">

      <Header/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='Cart' element={<Cart/>}/>
        <Route path='Wishlist' element={<Wishlist/>}/>
        <Route path='**' element={<Pagenotfound/>}/>
      </Routes>

      <Footer/>
       
    </div>
  );
}

export default App;

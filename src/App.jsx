import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import { useState, useEffect } from 'react';
import Order from './pages/Order';
import Login from './components/Login';

function App() {
  const [order, setOrder] = useState(null);
  const [user, setUser] = useState(null);
  const [personInfo, setPersonInfo] = useState()


  useEffect(() => {
    const username = localStorage.getItem("username");
    if (username) {
      setUser(username);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("username"); // Remove username from local storage
    setUser(null); // Clear user state
  };

  return (
    <BrowserRouter>
      {user && <Navbar handleLogout={handleLogout} />}
      <Routes>
        {!user && <Route path='/' element={<Login setUser={setUser} />} />}
        {user && (
          <>
            <Route path='/' element = { <Home /> } />
            <Route path='/shop' element = { <Shop /> } />
            <Route path='/cart' element = { <Cart /> } />
            <Route path='/checkout' element = { <Checkout setPersonInfo = { setPersonInfo } setOrder = { setOrder } />} />
            <Route path='/order-confirmation' element={<Order personInfo = { personInfo } order = { order } />} />
          </>
        )}
      </Routes>
      {user && <Footer />}
    </BrowserRouter>
  );
}

export default App;

import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './Pages/Home'
import CategoryNews from './Pages/CategoryNews';
import Account from './Pages/Account';


const App = () => {
  return (
    <Router>
      <div className="w-full">
       <Navbar />
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:category" element={<CategoryNews />} />
          <Route path="/account" element={<Account />} />
       </Routes>
       <Footer />
      </div> 
    </Router>
  )
}

export default App
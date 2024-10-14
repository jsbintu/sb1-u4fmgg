import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Testimonials from './pages/Testimonials';
import Articles from './pages/Articles';
import Booking from './pages/Booking';
import AdminPortal from './pages/AdminPortal';
import CustomerPortal from './pages/CustomerPortal';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/admin" element={<AdminPortal />} />
            <Route path="/customer" element={<CustomerPortal />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
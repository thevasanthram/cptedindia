import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./views/header/Header";
import Footer from "./views/footer/Footer";
import Home from "./views/home/Home";
import Profile from "./views/profile/Profile";
import About from "./views/about/About";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} /> {/* Default route */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

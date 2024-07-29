import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/home/Home";
import Profile from "./views/profile/Profile";
import About from "./views/about/About";
import MenuBarHandler from "./views/menubar_handler/MenuBarHandler";
import Header from "./views/header/Header";
import Footer from "./views/footer/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <main>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu/:menu_item" element={<MenuBarHandler />} />{" "}
            {/* Route with parameter */}
            <Route path="/" element={<Home />} /> {/* Default route */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

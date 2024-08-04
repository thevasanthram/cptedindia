import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/home/Home";
import MenuBarHandler from "./views/menubar_handler/MenuBarHandler";
import Header from "./views/header/Header";
import Footer from "./views/footer/Footer";
import NotFound from "./views/not_found/NotFound";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <main>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/menu/:menu_item" element={<MenuBarHandler />} />
            <Route path="/" element={<Home />} /> {/* Default route */}
            <Route
              path="*"
              element={
                <div className="menu-bar-handler">
                  <NotFound />
                </div>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

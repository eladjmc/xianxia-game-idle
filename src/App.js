import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Layout/Navbar/Navbar";
import MainPage from "./pages/MainPage/MainPage";
import "./App.css";

function App() {
  return (
    <div className="game-main-container">
      <main className="game-window">
        <Router>
          <div className="App">
            <Navbar />
            <Routes>
              <Route path="/" element={<MainPage />} />
              {/* Add more routes here */}
            </Routes>
          </div>
        </Router>
      </main>
    </div>
  );
}

export default App;

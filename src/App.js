import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Layout/Navbar/Navbar";
import MainPage from "./pages/MainPage/MainPage";
import SetupPage from "./pages/SetupPage/SetupPage";
import { useGameHook } from "./hooks/useGameHook"; // Import your custom hook
import "./App.css";

function App() {
  const { playerName, isGameStarted, gainCultivationXP } = useGameHook(); // Destructure the name from your custom hook
  useEffect(() => {
    if (isGameStarted) {
      const gamePlayInterval = setInterval(() => {
        // logic to get exp and stuff
        gainCultivationXP();
      }, 2000);
    }
  }, [isGameStarted]);

  return (
    <div className="game-main-container">
      <main className="game-window">
        <Router>
          <div className="App">
            {playerName && <Navbar />}
            <Routes>
              {playerName ? (
                <Route path="/" element={<MainPage />} />
              ) : (
                <Route path="/*" element={<SetupPage />} />
              )}
            </Routes>
          </div>
        </Router>
      </main>
    </div>
  );
}

export default App;

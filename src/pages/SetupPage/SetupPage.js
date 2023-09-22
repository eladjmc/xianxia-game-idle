// src/pages/SetupPage.js
import React, { useState } from "react";
import { useGameHook } from "../../hooks/useGameHook";
import { useNavigate } from "react-router-dom";
import "./SetupPage.scss";

const SetupPage = () => {
  const [playerName, setPlayerName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [newSpiritRoot,setNewSpiritRoot] = useState({})
  const [newCultivationTechnique,setNewCultivationTechnique] = useState({})
  const { setPlayerSetup, spiritRoot } = useGameHook();
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSaveName = () => {
    const randomSpiritRoot = { type: "water", grade: 1 };
    const basicCultivationTechnique = { name: "Basic Chi Manual", grade: 1 };
    setNewSpiritRoot(randomSpiritRoot)
    setNewCultivationTechnique(basicCultivationTechnique);
    let finalName = playerName;
    if (finalName.length > 24) {
      finalName = finalName.slice(0, 24);
    }
    setPlayerName(finalName);
    setShowModal(true);
  };

  const handleStart = () => {
    setPlayerSetup(playerName, newSpiritRoot, newCultivationTechnique);
    navigate("/"); // Navigate to MainPage
  };

  return (
    <section className="setup-page-container">
      {!showModal ? (
        <>
          <input
            type="text"
            placeholder="Enter your name"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
          />
          <button onClick={handleSaveName}>Save Name</button>
        </>
      ) : (
        <div className="modal">
          <h1>Nice!</h1>
          <p>Daoist {playerName}, you reincarnated.</p>
          <p>Your age is 18 and your spirit root is of the</p>
          <p className="special-line">
            -{spiritRoot.type}
            {" Element-"}
          </p>
          <p>You will start your journey at the</p>
          <p>-Thousand Swords Sect-</p>
          <p>You obtained</p>
          <p className="special-line">-Basic Chi Manual-</p>
          <p>Good luck!</p>
          <button className="start-btn" onClick={handleStart}>
            Start
          </button>
        </div>
      )}
    </section>
  );
};

export default SetupPage;

import React, { useEffect } from "react";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import { setupParticles } from "../../utils/chiParticle";
import "./MainPage.scss";
import { useGameHook } from "../../hooks/useGameHook";
import { REALM_NAME } from "../../models/realmModel";
const MainPage = () => {
  const {
    currentBattleTechnique,
    currentlyUsedCultivationTechnique,
    cultivationRealm,
    currentRealmLevel,
    currentCultivationXP,
    maxCultivationXP,
  } = useGameHook();

  useEffect(() => {
    const container = document.querySelector(".medi");
    const cleanup = setupParticles(container);

    return () => cleanup();
  }, []);

  const cultivationData = { current: currentCultivationXP, max: maxCultivationXP };
  const battleData = { current: 30, max: 100 };

  return (
    <div className="main-page">
      <div className="medi"></div>
      <div className="left-side-container">
          <div className="focus-container">
            <button className="focus-button">Focus</button>
            <div className="focus-bar">
              <ProgressBar
                fillColor="#00ff00"
                borderColor="#000000"
                data={cultivationData}
              />
              {true && <p>SPEED MULTIPLIER : X{"5"}</p>}
            </div>
          </div>
        <div className="progress-bars">
          <div className="cultivation-progress">
            <p>{`${REALM_NAME[cultivationRealm].realmName} LVL: ${currentRealmLevel}`}</p>
            <p>{currentlyUsedCultivationTechnique.name}</p>
            <ProgressBar
              fillColor="#00ff00"
              borderColor="#000000"
              data={cultivationData}
            />
          </div>
          <div className="battle-technique-progress">
            <p>{currentBattleTechnique.name}</p>
            <ProgressBar
              fillColor="#ff0000"
              borderColor="#000000"
              data={battleData}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;

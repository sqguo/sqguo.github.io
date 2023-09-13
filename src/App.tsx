import React, { useEffect, useState } from "react";
import profile from "./assets/profile.jpg";
import { motion, AnimatePresence } from "framer-motion";

import "./App.css";
import { Navigation } from "./components";

const ANIMATION_DELAY_MS = 600;

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), ANIMATION_DELAY_MS);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="App">
      <div className="intro">
        <div className="profile__wrapper">
          <motion.img
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, opacity: { duration: 1 } }}
            src={profile}
            className="profile__img"
            alt="profile"
          />
          <AnimatePresence>
            {!isLoading && (
              <motion.div
                className="profile__text-wrapper"
                initial={{ opacity: 0, translateY: 50 }}
                animate={{ opacity: 1, translateY: 0 }}
                exit={{ opacity: 0, translateY: 50 }}
                transition={{
                  delay: 0.2,
                  duration: 1,
                  translateY: { duration: 0.4 },
                }}
              >
                <div className="profile__name">Stanley Guo</div>
                <div className="profile__description">
                  I am a recent computer engineering graduate from the
                  University of Waterloo. I am currently based in Ontario,
                  Canada.
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <Navigation show={!isLoading} />
      </div>
    </div>
  );
}

export default App;

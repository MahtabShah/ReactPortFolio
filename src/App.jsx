import "./App.css";
// import img from "./IMG-20230917-WA0002.jpg";
import Background from "./background";
import "aos/dist/aos.css";
import "./text3d.css";

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Preloader timer
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // You can reduce or increase the time

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: "ease-out",
      once: false,
    });

    AOS.refresh();
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
          <p>Loading...</p>
        </div>
      ) : (
        <Background />
      )}
    </>
  );
};

export default App;

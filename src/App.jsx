import { useEffect } from "react";
import "./App.css";
// import img from "./IMG-20230917-WA0002.jpg";
import Background from "./background";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: "ease-out",
      once: false, // Animation occurs every time on scroll
      // mirror: true,
    });

    AOS.refresh();
  }, []);
  return (
    <>
      <Background></Background>
    </>
  );
};

export default App;

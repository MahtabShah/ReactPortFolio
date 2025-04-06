import React, { useEffect, useRef, useState } from "react";
import "./slider.css"; // Ensure styles are correctly imported
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import img1 from "./WhatsApp Image 2025-02-24 at 10.17.48_6013a730.jpg";
import img2 from "./AWhatsApp Image 2025-02-24 at 10.22.17_04ea43b1.jpg";
import img3 from "./7a850459-740a-40de-9b8f-d27e2d2f5e0c.jpg";

import { Cirtificate } from "./Footer.jsx";

const BoxSlider = () => {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);
  const boxesRef = useRef([]);
  const parentRef = useRef(null);
  const leftDoorRef = useRef(null);
  const rightDoorRef = useRef(null);
  const firstRef = useRef(null);
  const [called, setCalled] = useState(false);

  const resetBoxes = () => {
    boxesRef.current.forEach((box) => {
      box.style.transform = "translateX(100%)";
    });
  };

  const showBox = (i) => {
    resetBoxes();
    if (boxesRef.current[i]) {
      boxesRef.current[i].style.transform = "translateX(0)";
    }
  };

  const nextBox = () => {
    const newIndex = (index + 1) % boxesRef.current.length;
    setIndex(newIndex);
    showBox(newIndex);
  };

  const prevBox = () => {
    const newIndex =
      (index - 1 + boxesRef.current.length) % boxesRef.current.length;
    setIndex(newIndex);
    showBox(newIndex);
  };

  const autoSlide = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      nextBox();
    }, 3600);
  };

  const doorOpen = () => {
    if (!leftDoorRef.current || !rightDoorRef.current || !firstRef.current)
      return;
    leftDoorRef.current.style.clipPath =
      "polygon(50% 0%, 100% 20%, 100% 80%, 50% 100%)";
    rightDoorRef.current.style.clipPath =
      "polygon(0% 20%, 50% 0, 50% 100%, 0% 80%)";
    leftDoorRef.current.style.transform = "rotateY(-85deg)";
    rightDoorRef.current.style.transform = "rotateY(85deg)";
    setTimeout(() => {
      firstRef.current.style.transform = "scale(1)";
    }, 400);
  };

  const closeDoor = () => {
    if (!leftDoorRef.current || !rightDoorRef.current || !firstRef.current)
      return;
    leftDoorRef.current.style.clipPath =
      "polygon(50% 0%, 100% 0, 100% 100%, 50% 100%)";
    rightDoorRef.current.style.clipPath =
      "polygon(0% 0%, 50% 0, 50% 100%, 0% 100%)";
    leftDoorRef.current.style.transform = "rotateY(0deg)";
    rightDoorRef.current.style.transform = "rotateY(0deg)";
    firstRef.current.style.transform = "scale(0)";
  };

  useEffect(() => {
    showBox(index);
    autoSlide();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !called) {
            doorOpen();
            setCalled(true);
          } else if (!entry.isIntersecting && called) {
            closeDoor();
            setCalled(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (parentRef.current) {
      observer.observe(parentRef.current);
    }

    return () => {
      clearInterval(intervalRef.current);
      observer.disconnect();
    };
  }, [index, called]);

  const img = [img1, img2, img3];

  return (
    <div className="main">
      <div className="parent" ref={parentRef}>
        <div className="slanted-box leftdoor" ref={leftDoorRef}></div>

        <div className="controls">
          <button
            id="backBtn"
            className="btn"
            onClick={() => {
              clearInterval(intervalRef.current);
              prevBox();
              autoSlide();
            }}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button
            id="nextBtn"
            className="btn"
            onClick={() => {
              clearInterval(intervalRef.current);
              nextBox();
              autoSlide();
            }}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>

        <div className="slanted-box rightdoor" ref={rightDoorRef}></div>

        <div className="box-content">
          <div className="first" ref={firstRef}>
            {img.map((color, i) => (
              <div
                key={i}
                className={`box box${i + 1}`}
                style={{ background: color }}
                ref={(el) => (boxesRef.current[i] = el)}
              >
                <Cirtificate images={img[i]} />
              </div>
            ))}
          </div>

          <div className="count_dot">
            <span>o</span>
            <span>o</span>
            <span>o</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxSlider;

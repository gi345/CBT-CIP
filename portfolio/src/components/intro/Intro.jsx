import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    // Clear previous content in the span before initializing
    if (textRef.current) {
      textRef.current.innerHTML = "";
    }

    // Set a delay to ensure the component is fully rendered before initializing
    const timeoutId = setTimeout(() => {
      if (textRef.current) {
        init(textRef.current, {
          showCursor: true,
          backDelay: 1500,
          backSpeed: 60,
          strings: [" Frontend Developer", "Data Analyst", "Content Creator","UI/UX Designer", "Backend Developer"],
        });
      }
    }, 500); // Delay of 500ms to ensure DOM is fully loaded

    // Cleanup function to prevent memory leaks and clear the text
    return () => {
      clearTimeout(timeoutId);
      if (textRef.current) {
        textRef.current.innerHTML = ""; // Clear the content when the component unmounts
      }
    };
  }, []); // Only run once when the component mounts

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Divyanshu Tiwari</h1>
          <h3>
            Freelance <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}

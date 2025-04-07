import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import Photo from "../asset/Photo.jpeg"

const Home = () => {
  const texts = ["Web Developer", "React Enthusiast", "JavaScript Lover", "Tech Explorer"];
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100; // Speed of typing (in ms)
  const deletingSpeed = 50; // Speed of deleting (in ms)
  const delayBetweenWords = 1000; // Delay before deleting the word (in ms)

  useEffect(() => {
    const currentWord = texts[index];

    if (!isDeleting && charIndex < currentWord.length) {
      setTimeout(() => {
        setCurrentText(currentWord.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      setTimeout(() => {
        setCurrentText(currentWord.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, deletingSpeed);
    } else if (!isDeleting && charIndex === currentWord.length) {
      setTimeout(() => setIsDeleting(true), delayBetweenWords);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }
  }, [charIndex, isDeleting, index]);

  return (
    <section className="home" id="home">
      <div className="home-container bd-grid">
        <h1 className="home-title">
          <span>Hello, I am Sneha.</span><br /> 
          {/* <img src={Photo} alt="sneha sangar" className="home-img" /><br/> */}
          I am a <span className="typing-text">{currentText}</span><span className="cursor">|</span>
        </h1>
      
        
        <div className="home-scroll">
          <a href="#about" className="home-scroll-link">SCROLL DOWN</a>
        </div>
      </div>
    </section>
  );
};

export default Home;

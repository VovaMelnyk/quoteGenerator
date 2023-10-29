// src/QuoteGenerator.js
import React, { useState, useContext } from "react";
import { QuoteContext } from "./QuoteContext";
import "./QuoteGenerator.css";

function QuoteGenerator() {
  const { quotes } = useContext(QuoteContext);
  const [quote, setQuote] = useState("");
  const [isFlipped, setIsFlipped] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setIsVisible(false); // Hide the card initially

    // Delay to allow card to hide before flipping and showing new quote
    setTimeout(() => {
      setQuote(quotes[randomIndex]);
      setIsFlipped(true); // Set to true to ensure it flips to show the quote
      setIsVisible(true); // Show the card
    }, 300); // 300ms delay to match the transition duration
  };

  const hideQuote = () => {
    setIsVisible(false); // Hide the card

    // Delay to allow card to hide before flipping back to original state
    setTimeout(() => {
      setIsFlipped(false); // Set to false to flip back to original state
    }, 300); // 300ms delay to match the transition duration
  };

  return (
    <div className="quote-container">
      <div className="btn-container">
        <button onClick={generateQuote}>Generate</button>
        <button onClick={hideQuote}>Hide Quote</button>
      </div>
      <div className={`card ${isFlipped ? "flipped" : ""} ${isVisible ? "visible" : ""}`}>
        <div className="front"></div>
        <div className="back">{quote}</div>
      </div>
    </div>
  );
}

export default QuoteGenerator;

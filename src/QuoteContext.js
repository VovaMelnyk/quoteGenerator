// src/QuoteContext.js
import React, { createContext, useState, useEffect } from "react";

export const QuoteContext = createContext();

export const QuoteProvider = ({ children }) => {
  const [quotes, setQuotes] = useState(() => {
    const localData = localStorage.getItem("quotes");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("quotes", JSON.stringify(quotes));
  }, [quotes]);

  const addQuote = (quote) => {
    setQuotes((prevQuotes) => [...prevQuotes, quote]);
  };

  const deleteQuote = (index) => {
    const newQuotes = quotes.slice();
    newQuotes.splice(index, 1);
    setQuotes(newQuotes);
  };

  return <QuoteContext.Provider value={{ quotes, addQuote, deleteQuote }}>{children}</QuoteContext.Provider>;
};

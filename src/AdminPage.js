// src/AdminPage.js
import React, { useContext, useState } from "react";
import { QuoteContext } from "./QuoteContext";

function AdminPage() {
  const { quotes, addQuote, deleteQuote } = useContext(QuoteContext);
  const [newQuote, setNewQuote] = useState("");

  const handleAddQuote = () => {
    addQuote(newQuote);
    setNewQuote("");
  };

  return (
    <div className="panel">
      <input type="text" value={newQuote} onChange={(e) => setNewQuote(e.target.value)} />
      <button onClick={handleAddQuote}>Add Quote</button>
      <ul>
        {quotes.map((quote, index) => (
          <li key={index}>
            {quote}
            <button onClick={() => deleteQuote(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminPage;

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import QuoteGenerator from "./QuoteGenerator";
import AdminPage from "./AdminPage";
import { QuoteProvider } from "./QuoteContext";
import "./styles.css"; // Import the new styles
import "./App.css";

function App() {
  return (
    <QuoteProvider>
      <Router basename="/quoteGenerator">
        <div className="App">
          <nav>
            <Link to="/">Quote</Link>
            <Link to="/admin">Admin panel</Link>
          </nav>
          <Routes>
            <Route path="/" exact element={<QuoteGenerator />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </div>
      </Router>
    </QuoteProvider>
  );
}

export default App;

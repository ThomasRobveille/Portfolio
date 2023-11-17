import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/home" element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

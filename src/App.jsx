import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./MainFolder/Main";
import Footer from "./footer/Footer";


function App() {

  return (
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
        <Footer />
      </Router>
  );
}

export { App };

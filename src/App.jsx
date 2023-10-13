import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Services from "./OurservicesComponents/Services";
// import Batteries from "./OurservicesComponents/Batteries";
// import Wash from "./OurservicesComponents/Wash";
// import Others from "./OurservicesComponents/Others";
// import Pricing from "./OurservicesComponents/pricingPage/Pricing";
import Main from "./MainFolder/Main";
import Footer from "./footer/Footer";
// import MainForm from "./mainForm/MainForm";


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

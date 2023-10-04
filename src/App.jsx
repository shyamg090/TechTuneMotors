import React from "react";
import {BrowserRouter as Router , Routes , Route} from "react-router-dom";
import Services from "./OurservicesComponents/Services";
import Batteries from "./OurservicesComponents/Batteries";
import Wash from "./OurservicesComponents/Wash";
import Others from "./OurservicesComponents/Others";
import Main from "./MainFolder/Main";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element = { <Main/> } />
        <Route path="/services" element={ <Services/> } />
        <Route path="/batteries" element={ <Batteries/> } />
        <Route path="/wash" element={ <Wash/> } />
        <Route path="/others" element={ <Others/> } />
      </Routes>
</Router>
  );
}

export default App;

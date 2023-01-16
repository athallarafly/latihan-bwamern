import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "assets/scss/style.scss";
import LandingPage from "pages/LandingPage";
import Example from "pages/Example";
import DetailsPage from "pages/DetailsPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />}></Route>
          <Route exact path="/properties/:id" element={<DetailsPage />} />
          <Route path="/example" element={<Example />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.scss";
import SpeakerListContent from "./SpeakerListContent";

const App = () => (
  <Router>
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <Routes>
        <Route path="/speakers/:id" element={<SpeakerListContent />} />
      </Routes>
    </div>
  </Router>
);
ReactDOM.render(<App />, document.getElementById("app"));

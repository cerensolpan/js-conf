import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.scss";

import HostContent from "./HostContent";
import SpeakerListContent from "speakerList/SpeakerListContent";
import Header from "./Header";


export default function MainLayout() {
  return (
    <Router>
      <div className="text-3xl mx-auto max-w-6xl py-4 border border-blue-500 m-2 p-2">
      <div className="text-sm w-full text-right text-blue-500">host project</div>
        <Header/>
        <div className="my-5">
          <Routes>
            <Route exact path="/" element={<HostContent />} />
            <Route path="/speakers/:id" element={<SpeakerListContent />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

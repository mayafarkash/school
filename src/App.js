import React from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import Head from "./components/Head/Head";
import AnthemScreen from "./screens/AnthemScreen";
import GalleryScreen from "./screens/GalleryScreen";
import { Home } from "./screens/Home";
import VisionScreen from "./screens/VisionScreen";
import AgendaScreen from "./screens/AgendaScreen";

function App() {
  return (
    <Router>
      <Head />
      <main>
        <Routes>
          <Route path="/school" element={<Home />} axact />
          <Route path="/schools_anthem" element={<AnthemScreen />} />
          <Route path="/schools_vision" element={<VisionScreen />} />
          <Route path="/schools_gallery" element={<GalleryScreen />} />
          <Route path="/schools_agenda" element={<AgendaScreen />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

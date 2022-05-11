import React from "react";
import "./App.css";
import DiffJson from "./components/DiffJson";
import ReadJson from "./components/ReadJson";
import ShowJson from "./components/ShowJson";
import { SystemProvider } from "./context/SystemContext";

function App() {
  return (
    <div className="App">
      <SystemProvider>
        <ReadJson />
        <ShowJson />
        <DiffJson />
      </SystemProvider>
    </div>
  );
}

export default App;

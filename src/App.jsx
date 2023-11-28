import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Tabs } from "./Tabs";
import { Job } from "./Job";

function App() {
  return (
    <>
      <h2>React Tabs</h2>
      <div className="wrapper">
        <Tabs />
        <Job />
      </div>
    </>
  );
}

export default App;

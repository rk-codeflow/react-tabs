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

import Router from "../Router";
import "./App.css";
import Navbar from "./components/Navbar";
import SettingsButton from "./components/SettingsButton";

function App() {
  return (
    <>
      <Navbar />
      <Router />
      <SettingsButton />
    </>
  );
}

export default App;

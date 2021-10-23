import React from "react";
import "./App.css";
import MainFooter from "./Components/Footer/MainFooter";
import MainHeader from "./Components/Header/MainHeader";
import MainOverview from "./Components/Section/MainOverview";

function App() {
  return (
    <div className="App">
      <MainHeader />
      <MainOverview />
      <MainFooter />
    </div>
  );
}

export default App;

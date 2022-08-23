import React from "react";
import TopHeader from "../Components/TopHeader";
import NavBar from "../Components/NavBar";
import Main from "../Components/Main";

function App() {
  return (
    <div className="App">
      <div className="container">
        <TopHeader/>
        <NavBar />
        <Main />
      </div>
    </div>
  );
}

export default App;

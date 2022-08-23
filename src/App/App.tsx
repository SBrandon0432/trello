import React from "react";
import TopHeader from "../Components/TopHeader";
import SideBar from "../Components/SideBar";
import Main from "../Components/Main";

function App() {
  return (
    <div className="container">
        <TopHeader/>

        <div className="content">
          <SideBar/>
          <Main />
       </div>

    </div>
  );
}

export default App;

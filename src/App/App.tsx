import React from "react";
import TopHeader from "../Components/TopHeader";
import SideBar from "../Components/SideBar";
import HotelView from "../Components/HotelView";

function App() {
  return (
    <div className="container">
        <TopHeader/>

        <div className="content">
          <SideBar/>
          <HotelView />
       </div>

    </div>
  );
}

export default App;

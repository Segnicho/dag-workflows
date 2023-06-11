import React from "react";
import LeftSideBar from "./components/LeftSideBar";
import RightSideBar from "./components/RightSideBar";
import Main from "./components/Main";
function App() {
  return (
    <div className="grid  min-h-screen text-white p-5 grid-cols-8 gap-3">
      <div className="col-span-2">
        <LeftSideBar />
      </div>
      <div className="col-span-4">
        <Main />
      </div>
      <div className="col-span-2">
        <RightSideBar />
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import LeftSideBar from "./components/LeftSideBar";
// import Navbar from "./components/Navbar";
import RightSideBar from "./components/RightSideBar";
import Main from "./components/Main";
import Card from "./components/commons/Card";
import { leftData, rightData } from "./assets/data"
// Notifications
function App() {
  return (
    <div className="flex justify-between bg-black min-h-screen text-white p-5">
      <LeftSideBar />
      <Main />
      <RightSideBar />
    </div>
  );
}

export default App;

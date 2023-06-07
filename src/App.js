// import './App.css'
import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Homepage from "./components/Homepage";
import CookingCourse from "./components/CookingCourse";
import TailoringPage from "./components/TailoringPage";
import EcommercePage from "./components/EcommercePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/CookingCourse" element={<CookingCourse/>}/>
          <Route path="/TailoringPage" element={<TailoringPage/>}/>
          <Route path="/EcommercePage" element={<EcommercePage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
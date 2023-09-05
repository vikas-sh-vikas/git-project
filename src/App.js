import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './Component/Home';
import LeftSideBar from './Component/LeftSidebar';
import RightSideBar from './Component/RightSidebar';
import NoSidebar from './Component/NoSidebar';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/LeftSidebar" element={<LeftSideBar />} />
            <Route path="/RightSideBar" element={<RightSideBar />} />
            <Route path="/NoSidebar" element={<NoSidebar />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

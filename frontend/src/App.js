// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import BuenosAiresPage from "./pages/BuenosAires/BuenosAires";
import LaOndaPage from "./pages/LaOnda/LaOnda";
import DomiFarmPage from "./pages/DomiFarm/DomiFarm";
import HermosaLotPage from "./pages/HermosaLot/Hermosa_Lot";
import RockHousePage from "./pages/RockHouse/RockHouse";
import MonkeyRanchPage from "./pages/MonkeyRanch/Monkey_Ranch";




// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/property/9" element={<BuenosAiresPage/>} />
        <Route path="/property/12" element={<LaOndaPage/>} />
        <Route path="/property/10" element={<DomiFarmPage/>} />
        <Route path="/property/11" element={<HermosaLotPage/>} />
        <Route path="/property/13" element={<RockHousePage/>} />
        <Route path="/property/14" element={<MonkeyRanchPage/>} />        
        <Route path="/property/12" element={<LaOndaPage/>} />
      </Routes>
    </div>
  );
}

export default App;

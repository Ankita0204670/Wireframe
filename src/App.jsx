import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Measurement from "./pages/Measurement";
import BlazerMeasurement from "./pages/BlazerMeasurement";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<Products />} />
        <Route path="/measurement" element={<Measurement />} />
        <Route path="/blazer-measurement" element={<BlazerMeasurement />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
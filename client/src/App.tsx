import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import AddPage from "./pages/add";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/emp/add" element={<AddPage />} />
      </Routes>
    </Router>
  );
}

export default App;

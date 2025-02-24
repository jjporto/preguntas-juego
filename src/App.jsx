import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Levels from "./pages/levels";
import Level from "./pages/Level";
import Final from "./pages/Final";
import Proposito from "./pages/Proposito";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Proposito" element={<Proposito />} />
        <Route path="/levels" element={<Levels />} />
        <Route path="/level/:id" element={<Level />} />
        <Route path="/final" element={<Final />} />
      </Routes>
    </Router>
  );
};

export default App;

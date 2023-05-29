import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./homepage";
import Threed from "./threed";
import Skill from "./skill";
import Work from "./work";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/threed" element={<Threed />} />
        <Route exact path="/skill" element={<Skill />} />
        <Route exact path="/work" element={<Work />} />
      </Routes>
    </Router>
  );
};

export default App;

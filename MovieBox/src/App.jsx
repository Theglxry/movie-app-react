import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./sections/Homepage/Homepage";
import Dashboard from "./sections/Dashboard/Dashboard";
import "./components/FeaturedMovies/FeaturedMovies.css";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/movie/:id" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

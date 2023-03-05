import "./App.css";
import Header from "./components/Header";
import MainPages from "./pages/MainPages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<MainPages />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

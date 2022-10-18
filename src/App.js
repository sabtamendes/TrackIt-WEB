import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/GlobalStyle";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <Router>
     <GlobalStyle/>
      <Routes>
        <Route path="/" element={<Login />} />
      <Route path="/cadastro" element={<Register />}/>
      </Routes>
    </Router>

  );
}

export default App;

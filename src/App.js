import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/GlobalStyle";
import Login from "./components/Login";
import Register from "./components/Register";
import Habits from "./components/Habits";
import Historic from "./components/Historic";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/habitos" element={<Habits />} />
        <Route path="/historico" element={<Historic />} />
      </Routes>
    </Router>

  );
}

export default App;

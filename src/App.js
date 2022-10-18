import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/styles/GlobalStyle";
import Login from "./components/Login";
import Register from "./components/Register";
import Habits from "./components/Habits";
import Historic from "./components/Historic";
import Today from "./components/Today";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/habitos" element={<Habits />} />
       <Route path="/hoje" element={<Today />}/>
        <Route path="/historico" element={<Historic />} />
      </Routes>
    </Router>

  );
}

export default App;

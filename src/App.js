import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/styles/GlobalStyle";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Habits from "./components/habits/Habits";
import Today from "./components/today/Today";
import Historic from "./components/historic/Historic";
import UserContext from "./contexts/UserContext";
import ProgressContext from "./contexts/ProgressContext";
import { useState } from "react";

function App() {
  const [loginResponse, setLoginResponse] = useState(undefined);
  const [progress, setProgress] = useState("60");

  return (
    <UserContext.Provider value={{ loginResponse, setLoginResponse }} >
      <ProgressContext.Provider value={{ progress, setProgress }}>
        <Router>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Login loginResponse={loginResponse} setLoginResponse={setLoginResponse} />} />
            <Route path="/cadastro" element={<Register />} />
            <Route path="/habitos" element={<Habits />} />
            <Route path="/hoje" element={<Today />} />
            <Route path="/historico" element={<Historic />} />
          </Routes>
        </Router>
      </ProgressContext.Provider>
    </UserContext.Provider>

  );
}

export default App;

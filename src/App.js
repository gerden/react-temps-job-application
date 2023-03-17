import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { NavLink, useSearchParams } from "react-router-dom";

import Login from "./containers/Login/Login";
import Detail from "./containers/Detail/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/detail" element={<Detail />} />

        <Route path="/:detailId" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Dashboard from "./components/dashboard";
import PageNotFound from "./components/PageNotFound";

import "./App.css";
import SignUp from "./components/SignUp";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="*" element={<PageNotFound />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

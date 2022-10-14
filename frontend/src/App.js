import { BrowserRouter, Routes, Route } from "react-router-dom";
import login from "./components/login";
import dashboard from "./components/dashboard";
import PageNotFound from "./components/PageNotFound";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={login} />
          <Route path="/dashboard/:user" element={dashboard} />
          <Route path="*" element={PageNotFound} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

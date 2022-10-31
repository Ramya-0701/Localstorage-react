import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Main from "./Components/Main";
import Info from "./Components/Info";
import Show from "./Components/Show";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/main" element={<Main />} />
            <Route path="/info" element={<Info />} />
            <Route path="/show" element={<Show />} />
          </Route>
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;

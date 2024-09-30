import React from "react";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { MainPage } from "./pages/main/main";
import { Header } from "./components/header/header";
import { DocumentsPage } from "./pages/documents/documents";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path={"main"} element={<MainPage />}></Route>
          <Route path={"documents"} element={<DocumentsPage />}></Route>
          {/* <Route  path={''} element={}></Route> */}
          <Route path={"*"} element={<Navigate to="/main" replace />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;

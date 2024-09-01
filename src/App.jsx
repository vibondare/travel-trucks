import { useState } from "react";
import "./App.css";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import CatalogPage from "./pages/CatalogPage/CatalogPage.jsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";
import SharedLayout from "./components/SharedLayout/SharedLayout.jsx";
import CamperPage from "./pages/CamperPage/CamperPage.jsx";

function App() {
  return (
    <>
      <SharedLayout>
        <Suspense>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/campers" element={<CatalogPage />} />
            <Route path="/campers/:camperId" element={<CamperPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </SharedLayout>
    </>
  );
}

export default App;

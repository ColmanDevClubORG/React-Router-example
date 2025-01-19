import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./src/pages/Home/Home";
import About from "./src/pages/About/About";
import Profile from "./src/pages/Profile/Profile";
import NotFound from "./src/components/NotFound";
import Settings from "./src/pages/Settings/Settings";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/profile/:id" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;

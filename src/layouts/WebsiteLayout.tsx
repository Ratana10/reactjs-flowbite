import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const WebsiteLayout = () => {
  return (
    <div>
      <Navbar />

      {/* Content area */}
      <main className="pt-20">
        <div className="max-w-screen-xl mx-auto px-4">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WebsiteLayout;

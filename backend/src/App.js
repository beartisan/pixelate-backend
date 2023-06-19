import "./App.css";
import React from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Banner />
      </main>
      <Footer />
    </div>
  );
}

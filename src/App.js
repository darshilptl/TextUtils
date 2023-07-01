// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import Textfroms from "./components/Textfroms";
// import React, { useState } from "react";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="container my-2">
        <Textfroms heading="Enter The Text In To Below For Text Analyze" />
      </div>
    </>
  );
}

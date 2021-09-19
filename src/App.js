import React from "react";
import Navbar from "./components/navbar";
import HomePage from "./components/heropage";
import { useGlobalContext } from "./context";
const App = () => {
  const { loading } = useGlobalContext();
  if (loading) {
    return (
      <div className="cart-container">
        <h1>Loading.....</h1>
      </div>
    );
  }
  return (
    <>
      <Navbar />
      <HomePage />
    </>
  );
};

export default App;

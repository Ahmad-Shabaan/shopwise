import React from "react";
import Header from "./components/shared/Header";
import Home from "./pages/Home";
import Footer from "./components/shared/Footer";
import { Outlet } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Outlet />
        <Footer/>
      </>
    );
  }
}

export default App;

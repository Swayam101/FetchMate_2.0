import "./App.css";
import Footer from "./components/Footer";

import "react-toastify/dist/ReactToastify.css";

import NavBar from "./components/NavBar";

import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;

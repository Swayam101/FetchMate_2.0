import { Outlet } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import MobileNavbar from "./components/MobileNavbar";

function App() {
  return (
    <>
      <NavBar />
      <MobileNavbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;

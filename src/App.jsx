import { useState } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Product from "./components/product/Product";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Carusel from "./components/carusel/Carusel";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="dark:bg-gray-900 max-lg:text-base">
      <Header />
      <Carusel />
      <Product />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Products from "./pages/Products";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

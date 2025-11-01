// src/App.jsx
import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext.jsx"; // ✅ Importa el contexto
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Pizza from "./pages/Pizza";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <CartProvider>
      <Navbar />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizza/:id" element={<Pizza />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </CartProvider>
  );
}

import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";
import { useEffect } from "react";
import Lenis from "lenis";
import { Toaster } from "sonner";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { AnimatePresence } from "motion/react";
import Profile from "./pages/Profile";
import CollectionPage from "./pages/CollectionPage";
import ProductDetails from "./components/Products/ProductDetails";
import Checkout from "./components/Cart/Checkout";

const AppContent = () => {
  const location = useLocation(); 

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Toaster position="top-right" />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/collections/:collection" element={<CollectionPage/>} />
            <Route path="/product/:id" element={<ProductDetails/>} />
            <Route path="/checkout" element={<Checkout/>} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
};

const App = () => (
  <BrowserRouter>
    <AppContent /> 
  </BrowserRouter>
);

export default App;

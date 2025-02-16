import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";
import { useEffect } from "react";
import Lenis from "lenis";
import { Toaster } from "sonner";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { AnimatePresence } from "motion/react";

const AppContent = () => {
  const location = useLocation(); // ✅ Now inside BrowserRouter

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
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
};

const App = () => (
  <BrowserRouter>
    <AppContent /> {/* ✅ Now `useLocation` is inside BrowserRouter */}
  </BrowserRouter>
);

export default App;

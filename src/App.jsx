
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserLayout from './components/Layout/UserLayout';
import Home from './pages/Home';
import { useEffect } from 'react';
import Lenis from "lenis"


const App = () => {

  

  useEffect(()=>{
    const lenis = new Lenis();

    lenis.on("scroll", (event) => {
      console.log(event.scrollPosition);
      // Implement your logic here to handle scroll events.
      // For example, you can change the header's background color or adjust the layout.
    })

    function raf(time){
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf)
  })
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout/>}>
          <Route index element={<Home/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

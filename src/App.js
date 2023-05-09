import './assets/style/App.css';
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Index from './routers/Index';


function App() {
  
    useEffect(() => {
      Aos.init();
    }, []);
    
  return (
    <Index/>
  );
}

export default App;

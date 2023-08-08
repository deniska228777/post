import React, { useEffect, useState } from "react";
import './App.css';
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import { Auth } from "./context";

function App() {
  const [contMenu, setContMenu] = useState(false);
  const [lMod, setLMod] = useState(false);
  const [auth, setAuth] = useState(false);
  useEffect(() => {if (localStorage.getItem('auth')) setAuth(true)}, [])

  return (
    <Auth.Provider value={{auth, setAuth}}>
      <BrowserRouter>
        <AppRouter setLMod={setLMod} lMod={lMod} contMenu={contMenu} setContMenu={setContMenu}/>
      </BrowserRouter>
    </Auth.Provider>
  );
};
export default App;